function createServicePack(execlib) {
  'use strict';
  return {
    service: {
      dependencies: ['.', 'social:chatbank:lib', 'social:chatmethoddescriptors:lib', 'allex:varargfunctionhandler:lib']
    },
    sinkmap: {
      dependencies: ['.', 'social:chatmethoddescriptors:lib']
    }, /*
    tasks: {
      dependencies: []
    }
    */
  }
}

module.exports = createServicePack;
