module.exports = {
  cache: {},
  has(key) {
    return this.cache[key] !== undefined;
  },
  add(key, total) {
    this.cache[key] = total;
  },
  getTotalFor(key) {
    return this.cache[key];
  },
  scheduleClear(hourlyInterval) {
    setInterval(() => {
      this.cache = {};
    }, hourlyInterval * 60 * 60 * 1000);
  }
};
