const view = {}

view.showComponent = function (name) {
    switch (name) {
        case 'register': {
            let app = document.getElementById('app')
            app.innerHTML = components.register

            let formLink = document.getElementById('form-link')
            formLink.onclick = linkClickHandler

            let form = document.getElementById('register-form')
            form.onsubmit = formSubmitHandler

            function linkClickHandler() {
                view.showComponent('logIn')
            }

            function formSubmitHandler(event) {
                event.preventDefault()

                let registerInfo = {
                    username: form.username.value,
                    email: form.email.value,
                    password: form.password.value,
                    confirmPassword: form.confirmPassword.value
                }
                console.log(registerInfo)

                let validateResult = [
                    view.validate(registerInfo.username, 'username-error', 'Invalid username!'),
                    view.validate(registerInfo.email, 'email-error', 'Invalid email!'),
                    view.validate(
                        registerInfo.password && registerInfo.password.length >= 6,
                        'password-error',
                        'Invalid password!'
                    ),
                    view.validate(
                        registerInfo.confirmPassword && registerInfo.password == registerInfo.confirmPassword,
                        'confirm-password-error',
                        'Invalid confirm password!'
                    )
                ]

                if (allPassed(validateResult)) {
                    controller.register(registerInfo)
                }
            }
            break

        }
        case 'logIn': {
            let app = document.getElementById('app')
            app.innerHTML = components.logIn

            let formLink = document.getElementById('form-link')
            formLink.onclick = linkClickHandler

            let form = document.getElementById('log-in-form')
            form.onsubmit = formSubmitHandler

            function linkClickHandler() {
                view.showComponent('register')
            }

            function formSubmitHandler(event) {
                event.preventDefault()

                let logInInfo = {
                    email: form.email.value,
                    password: form.password.value
                }

                let validateResult = [
                    view.validate(logInInfo.email, 'email-error', 'Invalid email!'),
                    view.validate(
                        logInInfo.password && logInInfo.password.length >= 6,
                        'password-error',
                        'Invalid password!'
                    )
                ]

                if (allPassed(validateResult)) {
                    controller.logIn(logInInfo)
                }
            }

            break
        }
        case 'game': {
            let app = document.getElementById('app')
            app.innerHTML = components.game

            controller.loadConversations()
            controller.setupOnSnapshot()

            let signOut = document.getElementById('sign-out')
            signOut.onclick = signOutHandler

            let userEmail = document.getElementById('user-email')
            userEmail.innerHTML = firebase.auth().currentUser.email

            let formChat = document.getElementById('form-chat')
            formChat.onsubmit = formChatSubmitHandler

            let instructionLink = document.getElementById('instruction-link')
            instructionLink.onclick = linkClickHandler

            let inviteFriendForm = document.getElementById('form-invite-friend')
            inviteFriendForm.onsubmit = inviteFriendFormSubmitHandler

            let createNewRoom = document.getElementById('create-new-room')
            createNewRoom.onclick = createNewRoomHandler

            let btnLeaveConversation = document.getElementById('leave-conversation-btn')
            btnLeaveConversation.onclick = leaveConversationHandler
            

            for (i = 1; i < 5; i++) {
                let comingSoonLink = document.getElementById(`coming-soon-link-${i}`)
                comingSoonLink.onclick = comingSoonLinkHandler
            }
                
            function comingSoonLinkHandler() {
                view.showComponent('comingSoon')
            }

            function leaveConversationHandler() {
                controller.leaveConversation()
            }

            function createNewRoomHandler() {
                controller.leaveConversation().then
                view.showComponent('createRoom')
            }

            function inviteFriendFormSubmitHandler(e) {
                e.preventDefault()
                const friendEmail = inviteFriendForm.friendEmail.value
                let validateResult = view.validate(friendEmail, 'friend-email-error', 'Email không hợp lệ')
                if (validateResult) {
                    controller.inviteFriend(friendEmail)
                }
            }

            function linkClickHandler() {
                view.showComponent('instruction')
            }

            function signOutHandler() {
                firebase.auth().signOut()
            }

            function formChatSubmitHandler(e) {
                e.preventDefault()

                let messageContent = formChat.message.value.trim()
                if (messageContent) {
                    controller.addMessage(messageContent)
                }
            }

            break
        }

        case 'instruction': {
            let app = document.getElementById('app')
            app.innerHTML = components.instruction
            document.getElementById('instruction').onclick = a

            function a() {
                location.reload()
            }
            break
        }

        case 'createRoom': {
            let app = document.getElementById('app')
            app.innerHTML = components.createRoom

            let createNewRoomForm = document.getElementById('create-room-form')
            createNewRoomForm.onsubmit = newRoomFormHandler

            function newRoomFormHandler(e) {
                e.preventDefault()
                let title = createNewRoomForm.title.value
                let validateResult = view.validate(title, 'title-error', 'Hãy nhập tên phòng')
                if (validateResult) {
                    controller.addConversation(title)
                    view.showComponent('game')
                }
            }

            break
        }

        case 'comingSoon': {
            let app = document.getElementById('app')
            app.innerHTML = components.comingSoon

            document.getElementById('bounce').onclick = goBack

            function goBack() {
                view.showComponent('game')
            }

            break
        }
    }
}

view.setText = function (id, text) {
    document.getElementById(id).innerText = text
}

view.validate = function (condition, idErrorTag, messageError) {
    if (condition) {
        view.setText(idErrorTag, '')
        return true
    } else {
        view.setText(idErrorTag, messageError)
        return false
    }
}

view.showCurrentConversation = function () {
    if (model.currentConversation) {
        let messages = model.currentConversation.messages
        let chat = document.getElementById('chat')
        let currentEmail = firebase.auth().currentUser.email
        chat.innerHTML = ""

        for (let message of messages) {
            let className = ""
            if (message.owner == currentEmail) {
                className = "message-chat your"
            } else {
                className = "message-chat"
            }
            let html = `
          <div class="${className}">
            <span id="hihi">${message.content}</span>
          </div>
        `
            chat.innerHTML += html
        }

        chat.scrollTop = chat.scrollHeight
    }
}

view.showSystemMessages = function () {
    if (model.conversations) {
        let conversations = model.conversations
        let systemMessage = document.getElementById('system-message')
        systemMessage.innerHTML = ""

        for (let conversation of conversations) {
            let id = conversation.id
            let members = conversation.users.length
            let className = ""
            if (model.currentConversation && model.currentConversation.id == conversation.id) {
                className = "conversation current"
            }
            let html = `
        <div id="conversation-${id}" class="${className}">
            <div>Số người chơi: ${members}</div>
            
        </div>
      `
            systemMessage.innerHTML += html
        }
        if (model.currentConversation) {
            let players = model.currentConversation.users
            for (player of players) {
                let newPlayer = `${player} đã vào phòng<br>`
                systemMessage.innerHTML += newPlayer
            }

        }
    }
}

view.showPlayers = function () {
    if (model.currentConversation) {
        let player = document.getElementById('player')
        player.innerHTML = ''

        for (i = 0; i < model.currentConversation.users.length; i++) {
            let playerDiv = `
        <div class="name-inf">
            <span>${model.currentConversation.users[i]}</span>
            <i></i>
        </div>
        `
            player.innerHTML += playerDiv
        }
    }
}

view.startGame = function () {
    if (model.currentConversation) {
        let startGameBtn = document.getElementById('start')
        if (model.currentConversation.users.length == 6) {
            startGameBtn.disabled = false
        } else if (model.currentConversation.users.length != 6) {
            startGameBtn.disabled = true
        }
    }
}

view.clearCurrentConversation = function () {
    let systemMessages = document.getElementById('system-message')

    systemMessages.innerHTML = ''
}

function allPassed(validateResult) {
    for (let result of validateResult) {
        if (!result) {
            return false
        }
    }
    return true
}