// JS Fundamentals Part 1

// // Assignment 11

// const country = "India";
// const continent = "Asia";
// let population = 130;
// console.log(country);
// console.log(continent);
// console.log(population);
// Assignment 12

// const isIsland = false;
// let language;
// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);
// Assignment 13

// language = "Hindi";
// country = "dubai";
// console.log(language);
// console.log(country);

// Assignment 14

// console.log(population/2);
// population += 1;
// console.log(population);
// console.log(population > 6);
// console.log(population <= 33);
// const description = "'"+ country + " is in "+ continent + ", and its " + population +" crore people speak "+ language+"'";
// console.log(description);

// Assignment 17
// Template Literals
// const description2 = `'${country} is in ${continent}, and its ${population} crore people speak ${language}'`;
// console.log(description2);

// Assignment 18

// if(population >= 33){
// console.log(`'${country}'s population is above average'`);
// } else {
//     const lessThanAverage = (33-population);
// console.log(`'${country}'s population is ${lessThanAverage} crore below average'`);
// }

// Assignment 20

// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// Assignment 22

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1){
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// Assignment 24

// const nativeLanguage = language === 'English';
// const maxPopulation = population < 50;
// const notaIsland = isIsland === false;
// console.log(nativeLanguage);
// console.log(maxPopulation);
// console.log(notaIsland);

// if (nativeLanguage && maxPopulation && notaIsland) {
//     console.log(`You should live in ${country} :)`);
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

// Assignment 26

// switch (language){
//     case 'chinese':
//     case 'mandarian':
//         console.log('MOST number of native speakers!');
//     break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//     break;
//     case 'english':
//         console.log('3rd Place');
//     break;
//     case 'Hindi':
//         console.log('Number 4');
//     break;
//     case 'Arabic':
//         console.log( '5th most spoken language');
//     break;
//     default:
//         console.log('Great language too :D');
//     }

// Assignment 28

// console.log(`${country}'s population is ${population>=33 ? 'above':'below'} average`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JS Fundamentals Part 2

// Assignment 33

// function describeCountry(country,population,capitalCity){
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// const India = describeCountry("India",130,'Delhi')
// console.log(India);
// const usa = describeCountry("USA",70,'Washington DC');
// console.log(usa);
// const Canada = describeCountry("Canada",33,'Toronto');
// console.log(Canada);

// Assignment 34

const totalPopulation = 7900;
function percentageofworld1(population) {
  return (population / totalPopulation) * 100;
}

// const populationIndia = percentageofworld1(1300)
// console.log(populationIndia);

// const populationChina = percentageofworld1(1441)
// console.log(populationChina);

// const populationUSA = percentageofworld1(331.4)
// console.log(populationUSA);

// const percentageofworld2 =  function (population){
//     return (population/totalPopulation)*100;
// }

// const populationIndia2 = percentageofworld2(1300)
// console.log(populationIndia2);

// const populationChina2 = percentageofworld2(1441)
// console.log(populationChina2);

// const populationUSA2 = percentageofworld2(331.4)
// console.log(populationUSA2);

// Assignment 35

// const percentageofworld3 = population => (population/7900) *100;

// const populationIndia3 = percentageofworld3(1300)
// console.log(populationIndia3);

// const populationChina3 = percentageofworld3(1441)
// console.log(populationChina3);

// const populationUSA3 = percentageofworld3(331.4)
// console.log(populationUSA3);

// Assignment 36

function describePopulation(country, population) {
  const percPopulation = percentageofworld1(population);
  return `${country} has ${population} million people, which is about ${percPopulation.toFixed(
    2
  )}% of the world.`;
}

// console.log(describePopulation('India',1300));
// console.log(describePopulation('China',1441));
// console.log(describePopulation('USA',331.4));

// Assignment 39

// const populations = [1300,1441,331.4,700]
// console.log(populations.length === 4);
// const percentages = [percentageofworld1(populations[0]),percentageofworld1(populations[1]),percentageofworld1(populations[2]),percentageofworld1(populations[3])]
// console.log(percentages);

// Assignment 40

// const neighbours = ['Nepal', 'China','Bhutan']
// console.log(neighbours);

// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')){
//     console.log(`Probably not a central European Country`);
// }

// neighbours[neighbours.indexOf('China')] = 'Reason for Covid19';

// console.log(neighbours);

// Assignment 42

// const myCountry = {
//     country: 'India',
//     capital: 'Delhi',
//     language: 'Hindi',
//     population:1300,
//     neighbours: ['Nepal', 'China','Bhutan']
// };

// Assignment 43

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);

// Assignment 44

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1300,
  neighbours: ["Nepal", "China", "Bhutan"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
  },
};

// myCountry.describePopulation();
// console.log(myCountry.describe());
// myCountry.checkIsland();
// console.log(myCountry.isIsland);

// Assignment 46

// for (let voter = 0; voter <= 50; voter++) {
//     console.log(`Voter no. ${voter} is currently voting`);
// }

// Assignment 47

// const populations = [1300,1441,331.4,700]
// const percentages2 = [];
// function of assignment 34
// for (let i = 0; i < populations.length; i++) {

//     percentages2.push((percentageofworld1(populations[i])));

// }
// console.log(percentages2);

// Assignment 48

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) {
// for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbours: ${listOfNeighbours[i][j]}`);

// }
// }

// Assignment 49
// let i = 0;
// const populations = [1300,1441,331.4,700]
// const percentages3 = [];
// // function of assignment 34
// while(i < populations.length) {

//     percentages3.push((percentageofworld1(populations[i])));
//     i++;
// }
// console.log(percentages3);

// Pratice

const colors = ["red", "blue", "green", "orange", "black", "grey"];

const generateRandom = () => Math.floor(Math.random() * 6 + 1);
// console.log(generateRandom());

document.querySelector(".btn").addEventListener("click", function () {
  //   const randomNumber = Math.floor(Math.random() * 6 + 1);
  console.log("fsdfjk");
  document.body.style.background = colors[generateRandom()];
  //   colors.te;
});

let number = 0;

document.querySelector(".btn_increase").addEventListener("click", function () {
  document.querySelector(".number").textContent = ++number;
});

document.querySelector(".btn_decrease").addEventListener("click", function () {
  document.querySelector(".number").textContent = --number;
});
document.querySelector(".btn_reset").addEventListener("click", function () {
  number = 0;
  document.querySelector(".number").textContent = number;
});

let sum = 0;
let min = Infinity;
let max = 0;
const arr = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
  let totalsum = arr.reduce((acc, cur) => acc + cur);
  console.log(min);
  for (let i = 0; i < arr.length; i++) {
    sum = totalsum - arr[i];
    if (max < sum) {
      max = sum;
    }
    if (min > sum) {
      min = sum;
    }
  }
  return console.log(min, max);
}
miniMaxSum(arr);

// let totalCandles = 0;
// let maxCandles = 0;
let candles = [3, 2, 1, 3];
// function birthdayCakeCandles(candles) {
//   for (let i = 0; i < candles.length; i++) {
//     totalCandles++;
//     if (candles[i] === candles[i]) {
//       totalCandles++;
//     } else {
//       totalCandles = maxCandles;
//       totalCandles = 0;
//     }
//   }
//   return console.log(maxCandles);
// }

// let totalCandles0 = 0;
// let totalCandles1 = 0;
// let totalCandles2 = 0;
// let totalCandles3 = 0;
// let totalCandles4 = 0;
// function birthdayCakeCandles(candles) {
//   for (let i = 0; i < candles.length; i++) {
//     if (candles[i] === 0) {
//       totalCandles0++;
//     } else if (candles[i] === 1) {
//       totalCandles1++;
//     } else if (candles[i] === 2) {
//       totalCandles2++;
//     } else if (candles[i] === 3) {
//       totalCandles3++;
//     } else if (candles[i] === 4) {
//       totalCandles4++;
//     }
//   }
//   return console.log(
//     Math.max(totalCandles0, totalCandles1, totalCandles2, totalCandles3, totalCandles4)
//   );
// }
// // console.log(totalCandles0, totalCandles1, totalCandles2, totalCandles3, totalCandles4);

function birthdayCakeCandles(candles) {
  let totalCandles = {};
  for (let i = 0; i < candles.length; i++) {
    if (!totalCandles[candles[i]]) {
      totalCandles[candles[i]] = 1;
    } else {
      totalCandles[candles[i]]++;
    }
  }
  console.log(totalCandles);
  console.log(Object.keys(totalCandles));
  console.log(Object.values(totalCandles));
  console.log(...Object.values(totalCandles));
  return Math.max(...Object.values(totalCandles));
}
console.log(birthdayCakeCandles(candles));
