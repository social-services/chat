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
    name: 'User ID',
    type: 'string'
  },{
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
