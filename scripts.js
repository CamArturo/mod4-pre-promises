const testNum = num => {
  if (num > 10) {
    return Promise.resolve(`${num} is greater than 10, success!`);
  } else {
    return Promise.reject(`${num} is less than or equal to 10, error!`);
  }
};

const makeAllCaps = inputArr => {
  if (inputArr.every(word => typeof word === 'string')) {
    return Promise.resolve(inputArr.map(word => word.toUpperCase))
  }
  return Promise.reject(
    'No, the array you passed in contained an element that was not a string!'
  );
};

const sortWords = inputArr => {
  Promise.resolve(inputArr.sort());
};


testNum(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// 15 is greater than 10, success!
// 5 is less than 10, error!

makeAllCaps(['one, life, fitness'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error));