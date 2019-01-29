const cache = {
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
  scheduleClear(hourlyInterval = 24) {
    setInterval(() => {
      console.log('Cache cleared');
      this.cache = {};
    }, hourlyInterval * 1000 * 60 * 60);
  }
};

module.exports = config => {
  cache.scheduleClear(config.cacheClearIntervalHours);
  return cache;
};
