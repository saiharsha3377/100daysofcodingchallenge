function financeTracker() {
    let balance = 0;

    return {
        addIncome: function(amount) {
            balance += amount;
        },
        addExpense: function(amount) {
            balance -= amount;
        },
        getBalance: function() {
            return balance;
        }
    };
}

const myFinances = financeTracker();
myFinances.addIncome(10000);
myFinances.addExpense(7800);
myFinances.addExpense(200);
console.log(`Current Balance: $${myFinances.getBalance()}`);
