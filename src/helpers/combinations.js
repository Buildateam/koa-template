/* eslint-disable */
export const arraysCombination = (...arrays) => {
  /* eslint-enable */
  const r = [];
  const max = arrays.length - 1;
  function helper(arr, i) {
    for (let j = 0, l = arrays[i].length; j < l; j += 1) {
      const a = arr.slice(0);
      a.push(arrays[i][j]);
      if (i === max) {
        r.push(a);
      } else {
        helper(a, i + 1);
      }
    }
  }
  helper([], 0);
  return r;
};

