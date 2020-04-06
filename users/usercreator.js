function createUser(execlib, ParentUser, chatmethoddescriptors, vararglib) {
  'use strict';

  var lib = execlib.lib,
    qlib = lib.qlib,
    userPrototype2ServiceMethodViaMethodDescriptors = vararglib.userPrototype2ServiceMethodViaMethodDescriptors;

  if (!ParentUser) {
    ParentUser = execlib.execSuite.ServicePack.Service.prototype.userFactory.get('user');
  }

  function User(prophash) {
    ParentUser.call(this, prophash);
  }
  
  ParentUser.inherit(User, lib.extend({}, chatmethoddescriptors.service.user, require('../methoddescriptors/user')), [/*visible state fields here*/]/*or a ctor for StateStream filter*/);
  User.prototype.__cleanUp = function () {
    ParentUser.prototype.__cleanUp.call(this);
  };

  userPrototype2ServiceMethodViaMethodDescriptors(User.prototype, chatmethoddescriptors.service.user);

  return User;
}

module.exports = createUser;
