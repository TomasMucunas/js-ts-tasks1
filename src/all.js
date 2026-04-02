/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;

    if (promisesArray.length === 0) {
      resolve([]);
    }

    for (let i = 0; i < promisesArray.length; i++) {
      promisesArray[i]
        .then(result => {
          results[i] = result;
          count++;

          if (count === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};
