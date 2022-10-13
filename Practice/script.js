function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 33 && Math.ceil(grades[i] / 5) * 5 - grades[i] < 3) {
      console.log(Math.ceil(grades[i] / 5) * 5);
    } else {
      console.log(grades[i]);
    }
  }
}

const grades = [73, 67, 38, 33, 55, 77, 0, 99, 96];
gradingStudents(grades);

function kangaroo(x1, v1, x2, v2) {
  let valueX1 = x1;
  let valueX2 = x2;
  for (let i = 0; i < 10000; i++) {
    valueX1 += v1;
    valueX2 += v2;
    if (valueX1 === valueX2) {
      //   console.log("Yes");
      break;
    }
  }
  if (valueX1 === valueX2) {
    console.log("Yes");
  } else if (valueX1 !== valueX2) {
    console.log("No");
  }
}
kangaroo(0, 3, 4, 2);
