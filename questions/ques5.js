/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // what considered breaking a palindrome? none. You can have a look like not a palindrome, until it long enought an boom you have a palindrom. but remember the longest possible half palindrome is half total length

  // variables:
  // st: string splitted into array
  // half: math ceil of half length of string
  // map: array which contain a possible palindrome
  // lp: longest known palindrome
  // box: array which contain characters

  // 1st: loop until end of string
  // note: on first half (math ceil of half length) you are allowed to insert into map, without removing item from it.
  // after that you have to remove the first item in the map for each itteration

  console.log("==== Program Started ====");
  const st = s.split("");
  const half = Math.ceil(st.length / 2);
  const map = [];
  const box = [];
  let lp = "";

  st.forEach((c, i) => {
    console.log(`==== Loop ${i} ====`);

    if (i <= half) {
      map.push(c);
      box.push(c);
    } else {
      map.shift();
      box.push(c);
    }

    // logic: create a loop where on each iteration two pointers are made. one for each end of the array.
    // if the two pointers are the same, you have a possible palindrome. Thus continue the loop.
    // Else end that loop. If at the end of the loop that it's a palindrome, count the length of the array.
    // Do a comparison to check if this array is longer than previous palindrome. If so, replace the longest palindrome.

    // logic: backpedal palindrome checks
    // let say you have currently in the middle of loop. go backward check like this:
    //

    const halfBox = Math.floor(box.length / 2);

    box.every((ch, id) => {
      console.log("box: ", box);
      const p1 = id;
      const p2 = box.length - 1 - id;

      if (id === halfBox) {
        if (box.length > lp.length) lp = box.join("");
        return false;
      }

      if (box[p1] === box[p2]) {
        return true;
      } else {
        return false;
      }
    });
  });

  return lp;
};

console.log(longestPalindrome("abasdwad1321dsabaababs"));
