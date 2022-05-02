const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  constructor() {
    this.depth = 0;
  }
  
  calculateDepth(value) {
    return Array.isArray(value) ? 1 + Math.max(0, ...value.map(el => this.calculateDepth(el))) : this.depth;
  }
}

module.exports = {
  DepthCalculator
};
