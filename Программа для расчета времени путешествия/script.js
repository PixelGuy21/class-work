function calculateTime(){
    var distance = parseFloat(document.getElementById('distance').value);
    var speed = parseFloat(document.getElementById('speed').value);
    var area = distance / speed;
    document.getElementById('result').innerText = "Время путешествия: " + area + " часов";
}