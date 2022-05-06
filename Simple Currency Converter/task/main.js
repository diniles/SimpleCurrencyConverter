const input = require('sync-input');
//Write your code here
const currencies = {USD: 1, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75};
let sourceCurrency;
let destinationCurrency;
let amount;
let choice;

main();
makeChoice();


function main() {
  console.log('Welcome to Currency Converter!');
  console.log('1 USD equals  1 USD');
  console.log('1 USD equals  113.5 JPY');
  console.log('1 USD equals  0.89 EUR');
  console.log('1 USD equals  74.36 RUB');
  console.log('1 USD equals  0.75 GBP');
}

function makeChoice() {
  console.log('What do you want to do?');
  choice = input('1-Convert currencies 2-Exit program\n');
  switch (choice) {
    case ('1'):
      getSourceCurrency();
      getDestinationCurrency();
      getAmount();
      break;
    case ('2'):
      console.log('Have a nice day!');
      break;
    default:
      console.log('Unknown input');
      makeChoice();
  }
}

function getSourceCurrency() {
  console.log('What do you want to convert?');
  sourceCurrency = input('From: ').toUpperCase();
  if (sourceCurrency in currencies) {
    return sourceCurrency;
  } else {
    console.log('Unknown currency');
    makeChoice();
  }
}

function getDestinationCurrency() {
  destinationCurrency = input('To: ').toUpperCase();
  if (destinationCurrency in currencies) {
    return destinationCurrency;
  } else {
    console.log('Unknown currency');
    makeChoice();
  }
}

function getAmount() {
  amount = input('Amount: ');
  if (isNaN(amount)) {
    console.log('The amount has to be a number');
    makeChoice();
  } else if (amount < 0) {
    console.log('The amount can not be less than 1');
    makeChoice();
  } else {
    const result = convert(sourceCurrency, destinationCurrency, amount);
    console.log(`Result: ${amount} USD equals ${result.toFixed(4)} ${destinationCurrency}`);
    makeChoice();
  }
}

function convert(sc, dc, amount) {
  let result;
  switch (sc) {
    case ('USD'):
      result = amount * currencies[dc];
      break;
    default:
      result = amount * currencies[sc] * currencies[dc];
      break;
  }
  return result;
}