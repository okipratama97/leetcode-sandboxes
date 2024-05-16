const main = () => {
  const arr1 = [1, 2];
  const arr2 = [4, 5, 6, 10];
  let i1 = 0;
  let i2 = 0;
  const l1 = arr1.length;
  const l2 = arr2.length;
  const lt = l1 + l2;
  let merged = [];

  // special case 1 arr 1 < arr 2
  if (arr1[l1 - 1] <= arr2[0]) {
    merged = [...arr1, ...arr2];
  } else if (arr2[l2 - 1] <= arr1[0]) {
    merged = [...arr2, ...arr1];
  } else {
    for (let index = 0; index < lt; index++) {
      if (arr1[index] <= arr2[index]) {
        merged.push(arr1[i1]);
        i1++;
      } else {
        merged.push(arr2[i2]);
        i2++;
      }
    }
  }
  console.log(merged);

  if (lt % 2 == 0) {
    return (merged[lt / 2] - 1 + merged[lt / 2]) / 2;
  } else {
    return merged[Math.floor(lt / 2)];
  }
};

console.log(main());
