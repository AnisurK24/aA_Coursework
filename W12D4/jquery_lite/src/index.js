const DomNodeCollection = require('./dom_node_collection.js')   


window.$l = (arg) => {
  if (arg instanceof 'string') {
    return Array.from(document.querySelectorAll(arg));
  } else if (arg instanceof HTMLElement) {
    return new DomNodeCollection([arg]);
  }
  // "object":
  //   if (arg instanceof HTMLElement) {
  //   }

}















// ``






// const _docReadyCallbacks = [];
// let _docReady = false;

window.$l = (arg) => {
  switch (typeof arg) {
    case "function":
      return registerDocReadyCallback(arg); 
    case "string":
      return getNodesFromDom(arg);
  }
};
;

// getNodesFromDom = (selector) => {
//   const nodes = document.querySelectorAll(selector);
//   const nodesArray = Array.from(nodes);
//   return new DomNodeCollection(nodesArray);
// };

// document.addEventListener('DOMContentLoaded', () => {
//   _docReady = true;
//   _docReadyCallbacks.forEach(func => func());
// });
