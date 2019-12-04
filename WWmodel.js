const model = {
  conversations: null,
  currentConversation: null
}

model.saveConversations = function(conversations) {
  model.conversations = conversations
}

model.saveCurrentConversation = function(conversation) {
  model.currentConversation = conversation
}

model.updateConversation = function(conversation) {
  if(model.conversations) {
    let existedIndex = model.conversations.findIndex(function(element) {
      return element.id == conversation.id
    })
    if(existedIndex >= 0) {
      model.conversations[existedIndex] = conversation
    } else {
      model.conversations.push(conversation)
    }
  }
  if(model.currentConversation && conversation.id == model.currentConversation.id) {
    model.currentConversation = conversation
  }
}

model.removeConversation = function(conversation) {
  if(model.conversations) {
    let existedIndex = model.conversations.findIndex(function(element) {
      return element.id == conversation.id
    })
    if(existedIndex >= 0) {
      model.conversations.splice(existedIndex, 1)
    }
  }
}

