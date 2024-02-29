function convertCurrency(){
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;

    //Примерные курсы валют
    const exchangeRates = {
        USD: {
            EUR: 0.93,
            RUS: 1 / 92.35 // Обратное значение курса RUS к USD
        },
        EUR: {
            USD: 1.08,
            RUS: 1 / 98.90 // Обратное значение курса RUS к EUR
        },
        RUS: {
            EUR: 0.010,
            USD: 0.011
        }
    };
        
    if (fromCurrency === toCurrency){
        document.getElementById("result").innerText = "Выберите разные валюты для конвертации.";
        return;
    }

    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        const result = amount * exchangeRates[fromCurrency][toCurrency];
        document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;  
    } else{
        document.getElementById("result").innerText = "Курс для данной конвертации не найден.";
    }
}