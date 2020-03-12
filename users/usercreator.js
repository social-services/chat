function createUser(execlib, ParentUser) {
  'use strict';

  var qlib = execlib.lib.qlib;

  if (!ParentUser) {
    ParentUser = execlib.execSuite.ServicePack.Service.prototype.userFactory.get('user');
  }

  function User(prophash) {
    ParentUser.call(this, prophash);
  }
  
  ParentUser.inherit(User, require('../methoddescriptors/user'), [/*visible state fields here*/]/*or a ctor for StateStream filter*/);
  User.prototype.__cleanUp = function () {
    ParentUser.prototype.__cleanUp.call(this);
  };

  User.prototype.getNotifications = function (defer) {
    qlib.promise2defer(this.__service.getNotifications(), defer);
  };

  User.prototype.processNewMessage = function (from, togroup, to, msg, defer) {
    qlib.promise2defer(this.__service.processNewMessage(from, togroup, to, msg), defer);
  };

  User.prototype.getAllConversations = function (username, defer) {
    qlib.promise2defer(this.__service.getAllConversations(username), defer);
  };

  User.prototype.initiateChatConversationsWithUsers = function (username, usernames, defer) {
    qlib.promise2defer(this.__service.initiateChatConversationsWithUsers(username, usernames), defer);
  };

  User.prototype.getMessages = function (userid, conversationid, oldestmessageid, howmany, defer) {
    qlib.promise2defer(this.__service.getMessages(userid, conversationid, oldestmessageid, howmany), defer);
  };

  User.prototype.markMessageRcvd = function (userid, conversationid, messageid, defer) {
    qlib.promise2defer(this.__service.markMessageRcvd(userid, conversationid, messageid), defer);
  };

  User.prototype.markMessageSeen = function (userid, conversationid, messageid, defer) {
    qlib.promise2defer(this.__service.markMessageSeen(userid, conversationid, messageid), defer);
  };

  return User;
}

module.exports = createUser;
