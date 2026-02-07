let balance = 0;
const history = [];

function updateBalance() {
  document.getElementById("balance").textContent = balance.toFixed(2);
}

function addHistory(type, message) {
  history.unshift({ type, message, time: new Date().toLocaleTimeString() });
  renderHistory();
}

function renderHistory() {
  const list = document.getElementById("history-list");
  list.innerHTML = "";
  history.forEach(function (item) {
    const li = document.createElement("li");
    li.className = item.type;
    li.textContent = item.time + " - " + item.message;
    list.appendChild(li);
  });
}

document.getElementById("transaction-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const depositInput = document.getElementById("input-amount");
  const withdrawInput = document.getElementById("withdrawal-amount");

  const depositAmount = parseFloat(depositInput.value) || 0;
  const withdrawAmount = parseFloat(withdrawInput.value) || 0;

  if (depositAmount > 0) {
    balance += depositAmount;
    addHistory("deposit", "Deposited $" + depositAmount.toFixed(2));
  }

  if (withdrawAmount > 0) {
    if (withdrawAmount > balance) {
      alert("Insufficient funds! Your balance is $" + balance.toFixed(2));
    } else {
      balance -= withdrawAmount;
      addHistory("withdraw", "Withdrew $" + withdrawAmount.toFixed(2));
    }
  }

  updateBalance();
  depositInput.value = "";
  withdrawInput.value = "";
});

document.getElementById("compound-btn").addEventListener("click", function () {
  if (balance <= 0) {
    alert("You need a positive balance to earn interest.");
    return;
  }

  const rate = parseFloat(document.getElementById("interest-rate").value) || 0;
  const years = parseFloat(document.getElementById("years").value) || 0;

  if (rate <= 0 || years <= 0) {
    alert("Please enter valid rate and years.");
    return;
  }

  const oldBalance = balance;
  balance = balance * Math.pow(1 + rate / 100, years);
  const earned = balance - oldBalance;

  addHistory("interest", "Earned $" + earned.toFixed(2) + " interest (" + rate + "% over " + years + " yr" + (years > 1 ? "s" : "") + ")");
  updateBalance();
});

updateBalance();
