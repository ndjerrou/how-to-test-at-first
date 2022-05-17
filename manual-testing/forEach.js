module.exports = {
  forEach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
      cb(arr[i], i);
    }
  },
};
