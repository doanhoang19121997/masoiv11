const controller = {}

controller.initAuth = function () {
  firebase.auth().onAuthStateChanged(authStateChangeHandler)

  function authStateChangeHandler(user) {
    if (user && user.emailVerified) {
      view.showComponent('game')
    } else {
      view.showComponent('logIn')
    }
  }
}

controller.register = async function (registerInfo) {
  let email = registerInfo.email
  let password = registerInfo.password
  let displayName = registerInfo.firstname + " " + registerInfo.lastname

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    await firebase.auth().currentUser.updateProfile({
      displayName: displayName
    })
    await firebase.auth().currentUser.sendEmailVerification()
    view.setText('register-success', 'An verification email has been sent to your email address!')
  } catch (err) {
    view.setText('register-error', err.message)
  }
}

controller.logIn = async function (logInInfo) {
  try {
    let email = logInInfo.email
    let password = logInInfo.password

    let result = await firebase.auth().signInWithEmailAndPassword(email, password)
    if (result.user && result.user.emailVerified) {
      view.showComponent('game')
    } else {
      throw new Error('Must verified email!')
    }
  } catch (err) {
    view.setText('log-in-error', err.message)
  }
}

controller.loadConversations = async function () {
  let result = await firebase
    .firestore()
    .collection('conversations')
    .where('users', 'array-contains', firebase.auth().currentUser.email)
    .get()
  let conversations = []
  for (let doc of result.docs) {
    conversations.push(transformDoc(doc))
  }
  model.saveConversations(conversations)
  if (conversations.length) {
    model.saveCurrentConversation(conversations[0])
  }
  view.showCurrentConversation()
  view.showSystemMessages()
  view.showPlayers()
  view.startGame()
}

controller.addMessage = async function (messageContent) {
  if (messageContent && model.currentConversation) {
    let message = {
      content: messageContent,
      owner: firebase.auth().currentUser.email,
      createdAt: new Date().toISOString()
    }
    await firebase
      .firestore()
      .collection('conversations')
      .doc(model.currentConversation.id)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion(message)
      })
    document.getElementById('message-input').value = ''
  }
}

controller.setupOnSnapshot = function () {
  let isFirstTimeRun = true
  firebase
    .firestore()
    .collection('conversations')
    .where('users', 'array-contains', firebase.auth().currentUser.email)
    .onSnapshot(snapshotHandler)

  function snapshotHandler(snapshot) {
    if (isFirstTimeRun) {
      isFirstTimeRun = false
      return
    }

    for (let docChange of snapshot.docChanges()) {
      if (docChange.type == 'modified') {
        let conversation = transformDoc(docChange.doc)
        model.updateConversation(conversation)
        if (model.currentConversation && model.currentConversation.id == conversation.id) {
          view.showCurrentConversation()
        }
      }
      if (docChange.type == 'added') {
        let conversation = transformDoc(docChange.doc)
        model.updateConversation(conversation)
      }
      if (docChange.type == 'removed') {
        let conversation = transformDoc(docChange.doc)
        model.removeConversation(conversation)
        if (model.currentConversation && model.currentConversation.id == conversation.id) {
          view.clearCurrentConversation()
          if (model.conversations && model.conversations.length) {
            model.saveCurrentConversation(model.conversations[0])
            view.showCurrentConversation()
          }
        }
      }
    }
    view.showSystemMessages()
    view.showPlayers()
    view.startGame()
    view.showComponent('game')
  }
}

controller.addConversation = async function (title) {
  try {
    let newConversation = {
      title,
      createdAt: new Date().toISOString(),
      messages: [],
      users: [
        firebase.auth().currentUser.email,
      ]
    }
    await firebase
      .firestore()
      .collection('conversations')
      .add(newConversation)
  } 
  catch (err) {
    console.log(err)
  }
}

controller.inviteFriend = function(friendEmail) {controller.addConversation().then 
  const db = firebase.firestore();

  db.collection('conversations').doc(model.currentConversation.id).update({
  users: firebase.firestore.FieldValue.arrayUnion(friendEmail)
})
}

controller.leaveConversation = async function() {
  if(model.currentConversation) {
    let currentEmail = firebase.auth().currentUser.email
    let conversationId = model.currentConversation.id

    await firebase
      .firestore()
      .collection('conversations')
      .doc(conversationId)
      .update({
        users: firebase.firestore.FieldValue.arrayRemove(currentEmail)
      })
  }
  location.reload()
}

function transformDoc(doc) {
  let data = doc.data()
  data.id = doc.id
  return data
}

