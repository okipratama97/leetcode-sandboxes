const main = () => {
  const c = "abacba";
  const ss = {};
  // longest string
  let ln = 0;
  let ix = 0;
  let fc = 0;
  c.split("").forEach((a, i) => {
    console.log("# index", i);
    console.log("ix", ix);
    if (ss[a] == null) {
      ss[a] = i;
      console.log("input", a);
    } else {
      console.log("calculate", a);
      if (fc == 0) {
        console.log("first insert to longest", i);
        fc = i;
        ln = fc;
      }
      // current index - last known a index
      // if (ss[a].length > 1) {
      //   if (ix < ss[a][1]) ix = ss[a][1];
      // }
      const l = i - ix;
      const nexIx = ss[a] + 1;
      if (ix < nexIx) ix = nexIx;
      // ix = ss[a][0] + 1;
      if (l > ln) ln = l;
      ss[a] = i;
      console.log("local", l);
      console.log("longest", ln);
    }

    // on the last character
    if (i === c.length - 1) {
      console.log("# end of loop", a);
      const l = i + 1 - ix;
      if (l > ln) ln = l;
      console.log("local", l);
      console.log("longest", ln);
    }
    console.log("# end #");
    console.log("");
  });
  // console.log(ss)
  console.log("result", ln);
  console.log("obj", ss);
  console.log("ix", ix);
};

main();
