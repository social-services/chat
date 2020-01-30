(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
ALLEX.execSuite.registry.registerClientSide('social_chatservice',require('./sinkmapcreator')(ALLEX, ALLEX.execSuite.registry.getClientSide('.')));

},{"./sinkmapcreator":4}],2:[function(require,module,exports){
module.exports = {
};

},{}],3:[function(require,module,exports){
module.exports = {
  getNotifications: true,
  processNewMessage: [{
    name: 'From',
    type: 'string'
  },{
    name: 'To Group',
    type: 'String'
  },{
    name: 'To Peer',
    type: 'String'
  },{
    name: 'Message',
    type: 'String'
  }],
  getAllConversations: [{
    name: 'Username',
    type: 'string'
  }],
  getMessages: [{
    name: 'Conversation ID',
    type: 'string'
  },{
    name: 'Oldest Message ID',
    type: ['number', 'null']
  },{
    name: 'How Many',
    type: ['number', 'null']
  }]
};

},{}],4:[function(require,module,exports){
function sinkMapCreator(execlib, ParentSinkMap) {
  'use strict';
  var sinkmap = new (execlib.lib.Map);
  sinkmap.add('service', require('./sinks/servicesinkcreator')(execlib, ParentSinkMap.get('service')));
  sinkmap.add('user', require('./sinks/usersinkcreator')(execlib, ParentSinkMap.get('user')));
  
  return sinkmap;
}

module.exports = sinkMapCreator;

},{"./sinks/servicesinkcreator":5,"./sinks/usersinkcreator":6}],5:[function(require,module,exports){
function createServiceSink(execlib, ParentSink) {
  'use strict';
  function ServiceSink(prophash, client) {
    ParentSink.call(this, prophash, client);
  }
  
  ParentSink.inherit(ServiceSink, require('../methoddescriptors/serviceuser'));
  ServiceSink.prototype.__cleanUp = function () {
    ParentSink.prototype.__cleanUp.call(this);
  };
  return ServiceSink;
}

module.exports = createServiceSink;

},{"../methoddescriptors/serviceuser":2}],6:[function(require,module,exports){
function createUserSink(execlib, ParentSink) {
  'use strict';
  function UserSink(prophash, client) {
    ParentSink.call(this, prophash, client);
  }
  
  ParentSink.inherit(UserSink, require('../methoddescriptors/user'));
  UserSink.prototype.__cleanUp = function () {
    ParentSink.prototype.__cleanUp.call(this);
  };
  return UserSink;
}

module.exports = createUserSink;

},{"../methoddescriptors/user":3}]},{},[1]);
