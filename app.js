//console.log("Hello World");
/*const sum = (a, b) => {
    return a + b
}
console.log(sum(7,3));
*/


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//1 EUR (Euro) = 1.07 USD (US Dollar)

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    //Convertimos de dolares a euros
    let valueInEuros = valueInDollar / oneEuroIs.USD;
    //Convertimos el valor a yenes
    let valueInYen = valueInEuros * oneEuroIs.JPY;
    //Retornamos el valor en yenes
    return valueInYen;
}

//Declaramos una funcion con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    //Convertimos Euro a Yen
    let valueInEuros = valueInYen /oneEuroIs.JPY;
    //convertimos el valor a Libras
    let valueInPound = valueInEuros * oneEuroIs.GBP;
    //Retornamos el valor en Libras
    return valueInPound;

}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs };