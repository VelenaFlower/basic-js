module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 + arr.reduce((max, item) => {
      return Math.max(max, this.calculateDepth(item))
    }, 0) : -1;
  }
};
