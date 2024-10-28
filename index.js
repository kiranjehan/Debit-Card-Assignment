document.getElementById("nameInput").addEventListener("input", function() {
    document.querySelector(".cardholder-name").textContent = this.value.toUpperCase();
});

document.getElementById("numberInput").addEventListener("input", function() {
    let value = this.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
    document.querySelector(".card-number").textContent = value;
    this.value = value;
});

document.getElementById("expiryInput").addEventListener("input", function() {
    let value = this.value.replace(/[^0-9/]/g, "").replace(/^([0-9]{2})([0-9]{0,2})$/, "$1/$2");
    document.querySelector(".expiry").textContent = value;
    this.value = value;
});

document.getElementById("cvvInput").addEventListener("input", function() {
    document.querySelector(".cvv").textContent = this.value;
});
