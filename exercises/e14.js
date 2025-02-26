// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    let deposits = array[i].deposits;
    let depositsSum = 0;
    if (deposits && deposits.length > 0) {
      for (let j = 0; j < deposits.length; j++) {
        depositsSum += deposits[j];
      }
    }
    let withdrawals = array[i].withdrawals;
    let withdrawalsSum = 0;
    if (withdrawals && withdrawals.length > 0) {
      for (let k = 0; k < withdrawals.length; k++) {
        withdrawalsSum += withdrawals[k];
      }
    }
    if (array[i].balance !== depositsSum - withdrawalsSum) {
      arr.push(array[i]);
    }
  }
  return arr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
