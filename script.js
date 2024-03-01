function calculateDiscount() {
    var originalPrice = parseFloat(document.getElementById("original-price").value);
    var discountPercentage = parseFloat(document.getElementById("discount-percentage").value);

    if (isNaN(originalPrice) || isNaN(discountPercentage)) {
        document.getElementById("result").innerText = "Пожалуйста, введите корректные значения";
        return;
    }

    var discountAmount = (originalPrice * discountPercentage) / 100;
    var finalPrice = originalPrice - discountAmount;

    document.getElementById("result").innerText = "Итоговая цена со скидкой: " + finalPrice.toFixed(2) + " руб.";
}
