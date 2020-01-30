function createServicePack(execlib) {
  'use strict';
  return {
    service: {
      dependencies: ['.', 'social:chatbank:lib']
    },
    sinkmap: {
      dependencies: ['.']
    }, /*
    tasks: {
      dependencies: []
    }
    */
  }
}

module.exports = createServicePack;
