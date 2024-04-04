document.addEventListener("DOMContentLoaded", function() {
    const billTotalInput = document.getElementById("billTotal");
    const tipInput = document.getElementById("tip");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const tipAmountInput = document.getElementById("tipAmount");
    const totalBillInput = document.getElementById("totalBill");
    const errorMessage = document.getElementById("error-message");

    function calculateTip() {
        const billTotal = parseFloat(billTotalInput.value);

        if (isNaN(billTotal) || billTotal < 0) {
            errorMessage.style.display = "block";
            return;
        } else {
            errorMessage.style.display = "none";
        }

        const tipPercentage = parseFloat(tipInput.value);
        const tipAmount = (billTotal * tipPercentage) / 100;
        const totalBill = billTotal + tipAmount;

        tipPercentageInput.value = tipPercentage.toFixed(2);
        tipAmountInput.value = tipAmount.toFixed(2);
        totalBillInput.value = totalBill.toFixed(2);
    }

    billTotalInput.addEventListener("input", calculateTip);
    tipInput.addEventListener("input", calculateTip);
});
