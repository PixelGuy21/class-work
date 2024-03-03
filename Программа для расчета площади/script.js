function calculateSquare() {
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    var area = length * width;
    document.getElementById('result').innerText = "Площадь комнаты: " + area + " квадратных метров";
}