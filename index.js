// Function untuk menghitung Cash In
function calculateTotalCashIn(cashFlow) {
    return cashFlow.cashIn.reduce(function (total, transaction) { return total + transaction.amount; }, 0);
}
// Function untuk menghitung Cash Out
function calculateTotalCashOut(cashFlow) {
    return cashFlow.cashOut.reduce(function (total, transaction) { return total + transaction.amount; }, 0);
}
// Function untuk update DOM dari Result
function updateResults() {
    var cashInResultElement = document.getElementById("cashInResult");
    var cashOutResultElement = document.getElementById("cashOutResult");
    if (cashInResultElement && cashOutResultElement) {
        cashInResultElement.textContent = "Total cash in: Rp. ".concat(calculateTotalCashIn(cashFlow));
        cashOutResultElement.textContent = "Total cash out: Rp. ".concat(calculateTotalCashOut(cashFlow));
    }
}
//Contoh dari cash flow
var cashFlow = {
    cashIn: [],
    cashOut: [],
};
var cashFlowForm = document.getElementById("cashFlowForm");
if (cashFlowForm) {
    cashFlowForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var amountInput = document.getElementById("amount");
        var typeSelect = document.getElementById("type");
        if (amountInput && typeSelect) {
            var amount = parseFloat(amountInput.value);
            var type = typeSelect.value;
            if (!isNaN(amount)) {
                cashFlow[type].push({ amount: amount, type: type });
                updateResults();
            }
            // Reset form setelah pengisian data
            cashFlowForm.reset();
        }
    });
}
updateResults();
// Function untuk menghitung total amount (Cash In - Cash Out)
function calculateTotalAmount(cashFlow) {
    var totalCashIn = calculateTotalCashIn(cashFlow);
    var totalCashOut = calculateTotalCashOut(cashFlow);
    return totalCashIn - totalCashOut;
}
// Fcuntion untuk update DOM dengan result akhir/total
function updateResults() {
    var cashInResultElement = document.getElementById("cashInResult");
    var cashOutResultElement = document.getElementById("cashOutResult");
    var totalAmountResultElement = document.getElementById("totalAmountResult");
    if (cashInResultElement && cashOutResultElement && totalAmountResultElement) {
        cashInResultElement.textContent = "Rp. ".concat(calculateTotalCashIn(cashFlow));
        cashOutResultElement.textContent = "Rp. ".concat(calculateTotalCashOut(cashFlow));
        totalAmountResultElement.textContent = "Rp. ".concat(calculateTotalAmount(cashFlow));
    }
}
