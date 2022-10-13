'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (movement, i) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${movement}€</div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const displaySummary = function (acc) {
  const deposits = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, deposits) => acc + deposits, 0);
  labelSumIn.textContent = `${deposits}€`;
  const withdrawal = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, withdrawal) => acc + withdrawal, 0);
  labelSumOut.textContent = `${withdrawal}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const updateUi = function (acc) {
  displayMovements(acc.movements);

  // Print Balance
  calcPrintBalance(acc);

  // Display Summary
  displaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  //Username login input
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // password input checked
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Opacity change on login
    containerApp.style.opacity = 100;
    // Welcome Text
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
  }
  updateUi(currentAccount);
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferAmt = Number(inputTransferAmount.value);
  const transferTo = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  if (
    transferAmt > 0 &&
    transferTo &&
    transferTo !== currentAccount &&
    currentAccount.balance >= transferAmt
  ) {
    transferTo.movements.push(transferAmt);
    currentAccount.movements.push(-transferAmt);
    // Update UI
    inputTransferAmount.value = inputTransferTo.value = '';
    // Showing Balance
  }

  console.log(account1.movements);
  console.log(account2.movements);
  console.log(transferTo);
  updateUi(currentAccount);
});
//btn Loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    // add loan amount movements
    currentAccount.movements.push(loanAmount);
    //update UI
    updateUi(currentAccount);
  }
  inputLoanAmount.value = '';
});

// Deleting an Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    // Login Text
    labelWelcome.textContent = `Log in to get started`;
    containerApp.style.opacity = 0;
  }
  //empty input fields
  inputCloseUsername.value = inputClosePin.value = '';
});
//Creating UserName
const creatingUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
creatingUsernames(accounts);
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const arr = ['a', 'b', 'c', 'd', 'e'];

//slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

//splice - delete 1 or more elements of array

// console.log(arr.splice(2));
// console.log(arr.slice(-1));
// console.log(arr);
// console.log(arr.splice(1, 2));
// console.log(arr);

// const arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

//concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

//join
// const boolean = [true, false, true];
// console.log(boolean.join('-'));
// console.log(letters.join('-'));

// Lecture 143 The New At Method

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0)); // New At Method

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// console.log(arr.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// Lecture 144 Looping Arrays forEach

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// using for of loop

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movements ${i + 1}: You have Deposited ${movement}`);
//   } else {
//     console.log(`Movements ${i + 1}: You have Withdrawn ${Math.abs(movement)}`);
//   }
// }

// console.log('-----------------FOR EACH--------------------');

// Using for each

// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movements ${i + 1}: You have Deposited ${movement}`);
//   } else {
//     console.log(`Movements ${i + 1}: You have Withdrawn ${Math.abs(movement)}`);
//   }
// });

//Lecture 145 forEach with Maps and Sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
//for maps
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//for sets

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

//Lecture 150 The Map Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const momentsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// USing Arrow function instead of expression function
const momentsUsd = movements.map(mov => mov * eurToUsd);

// Using For of for the same problem
const movementsUsdOf = [];
for (const mov of movements) movementsUsdOf.push(mov * eurToUsd);
// console.log(movementsUsdOf);

// const movementsDescription = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movements ${i + 1}: You have Deposited ${mov}`;
//   } else {
//     return `Movements ${i + 1}: You have Withdrawn ${Math.abs(mov)}`;
//   }
// });

// for description we can use this instead of if statement

const movementsDescription = movements.map((mov, i) => {
  return `Movements ${i + 1}: You have ${
    mov > 0 ? 'Deposited' : 'Withdrawn'
  } ${Math.abs(mov)}`;
});

// console.log(movements);
// console.log(momentsUsd);
// console.log(movementsDescription);

// Lecture 151 Computing Usernames

const user = 'Steven Thomas Williams';

// console.log(accounts);

// Lecture 152 The filter method

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
// console.log(deposits);
const withdrawal = movements.filter(function (mov) {
  return mov < 0;
});
// console.log(withdrawal);

// Lecure 153 The Reduce Method

const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
});
// console.log(balance);

// Using for loop for the same
// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// CHECK Maximum Value from Movements

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
// console.log(max);

// Lecture 155 The Magic of Chaining Method

const totalInUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);

// console.log(totalInUsd);

// Lecture 157 The Find Method

const firstElement = movements.find(mov => mov < 0);
// console.log(movements, firstElement);

// getting account info

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    // console.log(acc);
  }
}
// Lecture 161 Some And Every Method

// console.log(movements.includes(-130));
//Some
// console.log(movements.some(mov => mov === -130));
// console.log(movements.some(mov => mov >= 0));

//Every
// console.log(movements.every(mov => mov > 0)); // Every Movement should be greater than zero
// console.log(account4.movements.every(mov => mov > 0));

// Lecture 162 Flat And FlatMap

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arr2 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arr2.flat(2)); // 2 decreases 2 flat deep

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const totalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(totalBalance);

// Combining all array functions
// const allTogether = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(allTogether);

// Using FlatMap Method in alltogether
// const allTogether2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(allTogether2);

// Lecture 166 array method practice

const total = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(total);

const total2 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;

//Other way of doing this
const total22 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);

console.log(total2);
console.log(total22);

const total3 = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      sum[cur > 0 ? 'deposit' : 'withdraw'] += cur;
      return sum;
    },
    { deposit: 0, withdraw: 0 }
  );
console.log(total3);
