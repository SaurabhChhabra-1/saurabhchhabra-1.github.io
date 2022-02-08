// const z = '*';

//////////////////X///////////////
// function staircase(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < n; j++) {
//       if (i === j || i + j === n - 1) {
//         str += "#";
//       } else {
//         str += " ";
//       }
//     }
//     console.log(str);
//   }
// }
// staircase(9);

//////////////// N///////////////////
// function staircase(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < n; j++) {
//       if (i === j || j === 0 || j === n - 1) {
//         str += "#";
//       } else {
//         str += " ";
//       }
//     }
//     console.log(str);
//   }
// }
// staircase(10);

//////////////////Z///////////////////////
function staircase(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (i + j === n - 1 || i === 0 || i === n - 1) {
        str += "#";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}
staircase(10);

// let zFunction = [];
// function zStructure(n) {
//   for (let i = 0; i < n; i++) {
//     // console.log(`${z}${z}${z}${z}${z}${z}${z}${z}${z}${z}${z}${z}`);
//     for (let j = 0; j < n; j++) {
//       if (i === 0) {
//         zFunction += "*";
//       }
//       if (i + j === n) {
// zFunction += '*';
//   }
// }
// console.log(zFunction);
// console.log(zFunction);
//   }
// }

// zStructure(10);
