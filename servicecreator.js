function createChatService(execlib, ParentService, chatbanklib, chatmethoddescriptors, vararglib) {
  'use strict';
  
  var lib = execlib.lib,
    q = lib.q,
    ChatBank = chatbanklib.Bank,
    userPrototype2ServiceMethod = vararglib.userPrototype2ServiceMethod;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user'), chatmethoddescriptors, vararglib) 
    };
  }

  function ChatService(prophash) {
    ParentService.call(this, prophash);
    this.bank = new ChatBank({
      path: (prophash && prophash.chatdbpath) ? prophash.chatdbpath : 'Chat.db',
      starteddefer: this.readyToAcceptUsersDefer
    });
  }
  
  ParentService.inherit(ChatService, factoryCreator);
  
  ChatService.prototype.__cleanUp = function() {
    if (this.bank) {
      this.bank.destroy();
    }
    this.bank = null;
    ParentService.prototype.__cleanUp.call(this);
    chatbanklib.deInit();
  };

  ChatService.prototype.isInitiallyReady = function () {
    return false;
  };

  ChatService.prototype.getNotifications = function () {
    if (!(this.bank && this.bank.conversationNotification && this.bank.conversationNotification.defer)){
      return q.reject(new lib.Error('ALREADY_DESTROYED'));
    }
    return this.bank.conversationNotification.defer.promise;
  };
  
  ChatService.prototype.processNewMessage = function (from, togroup, to, msg, options) {
    if (!(this.bank && this.bank.conversationNotification && this.bank.conversationNotification.defer)){
      console.log(this.bank.conversationNotification);
      return q.reject(new lib.Error('ALREADY_DESTROYED'));
    }
    return this.bank.processNewMessage(from, togroup, to, msg, options);
  };
  
  ChatService.prototype.getAllConversations = function (username) {
    if (!(this.bank && this.bank.conversationNotification && this.bank.conversationNotification.defer)){
      console.log(this.bank.conversationNotification);
      return q.reject(new lib.Error('ALREADY_DESTROYED'));
    }
    return this.bank.allConversationsOfUser(username);
  };
  
  ChatService.prototype.initiateChatConversationsWithUsers = function (username, usernames) {
    if (!(this.bank && this.bank.conversationNotification && this.bank.conversationNotification.defer)){
      console.log(this.bank.conversationNotification);
      return q.reject(new lib.Error('ALREADY_DESTROYED'));
    }
    return this.bank.initiateConversationsOfUserForUsers(username, usernames);
  };
  
  ChatService.prototype.getMessages = function (userid, conversationid, oldestmessageid, howmany) {
    if (!(this.bank && this.bank.conversationNotification && this.bank.conversationNotification.defer)){
      console.log(this.bank.conversationNotification);
      return q.reject(new lib.Error('ALREADY_DESTROYED'));
    }
    return this.bank.messagesOfConversation(userid, conversationid, oldestmessageid, howmany);
  };

  ChatService.prototype.markMessageRcvd = function (userid, conversationid, messageid) {
    if (!(this.bank && this.bank.conversationNotification && this.bank.conversationNotification.defer)){
      console.log(this.bank.conversationNotification);
      return q.reject(new lib.Error('ALREADY_DESTROYED'));
    }
    return this.bank.markMessageRcvd(userid, conversationid, messageid);
  };

  ChatService.prototype.markMessageSeen = function (userid, conversationid, messageid) {
    if (!(this.bank && this.bank.conversationNotification && this.bank.conversationNotification.defer)){
      console.log(this.bank.conversationNotification);
      return q.reject(new lib.Error('ALREADY_DESTROYED'));
    }
    return this.bank.markMessageSeen(userid, conversationid, messageid);
  };
  
  ChatService.prototype.editMessage = function (from, conversationid, messageid, editedmsg, options) {
    if (!(this.bank && this.bank.conversationNotification && this.bank.conversationNotification.defer)){
      console.log(this.bank.conversationNotification);
      return q.reject(new lib.Error('ALREADY_DESTROYED'));
    }
    return this.bank.editMessage(from, conversationid, messageid, editedmsg, options);
  };

  ChatService.prototype.reportChatActivity = function (userid, conversationid) {
    if (!(this.bank && this.bank.conversationNotification && this.bank.conversationNotification.defer)){
      console.log(this.bank.conversationNotification);
      return q.reject(new lib.Error('ALREADY_DESTROYED'));
    }
    return this.bank.ackUserActivity(userid, conversationid);
  };

  ChatService.prototype.createNewGroupWithMembers = function (creatorid, groupname, members) {
    if (!(this.bank && this.bank.conversationNotification && this.bank.conversationNotification.defer)){
      console.log(this.bank.conversationNotification);
      return q.reject(new lib.Error('ALREADY_DESTROYED'));
    }
    return this.bank.createNewGroupWithMembers(creatorid, groupname, members);
  };
  
  return ChatService;
}

module.exports = createChatService;
