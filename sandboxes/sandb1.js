const aRunner = async (arr) => {
  return new Promise((resolve, reject) => {
    console.log("aRunner started");

    let total = 1;
    arr.forEach((el) => {
      total = total * el;
    });
    console.log("total 1", total);
    resolve(total);
  });
};

const runner = (arr) => {
  console.log("runner started");

  let total = 1;
  arr.forEach((el) => {
    total = total * el;
  });
  console.log("total 2", total);

  return total;
};

const main = async (arr1, arr2) => {
  const res = await Promise.all([aRunner(arr1), aRunner(arr2)]);

  // console.log("res1", res1);
  // console.log("res2", res2);
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
];
main(arr2, arr1);
