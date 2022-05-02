const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 let chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(! value ? '()' : `( ${value} )`);
    return this;
  },

  removeLink(position) {
    if ( position <= 0 || position > this.getLength() || ! Number.isInteger(position) ) {      
      throw new Error('You can\'t remove incorrect link!');  
    } else {
      this.chain = this.chain.slice(position);
    }
    return this;
  },
  
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    let output = this.chain;
    this.chain = [];
    return output.join('~~');
  }
}

module.exports = {
  chainMaker
};
