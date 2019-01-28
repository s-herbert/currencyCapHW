module.exports = {
  cache: {},
  has(key) {
    return this.cache[key] !== undefined;
  },
  addToCache(key, total) {
    this.cache[key] = total;
  },
  getTotalFor(key) {
    return this.cache[key];
  }
};
