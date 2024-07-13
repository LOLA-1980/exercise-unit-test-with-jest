const { fromEuroToDollar } = require('./app.js');

/*test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});*/

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("5 dolares should be 731.30 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen, oneEuroIs } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(5);

    // calculo manual de valor esperado en yenes. entonces 5 dlares debe ser (5 * 146.5)
    const expectedyenes = 5 / oneEuroIs.USD * oneEuroIs.JPY;
console.log(yenes);
console.log(expectedyenes);
    // Hago mi comparación (la prueba)
    expect(yenes).toBe(expectedyenes); // 5 dolares son 731.3 yenes, 
})


test("5 yenes should be 0.027 libras", function() {
    //Importo la funcion desde app.js
    const { fromYenToPound, oneEuroIs } = require('./app.js');
    //Uso la funcion como debe ser usada
    const pound = fromYenToPound(5);
    //Cálculo manual de valor esperado en libras. 
    const expectedpounds = (5 / oneEuroIs.JPY) * oneEuroIs.GBP;

    console.log(pound);
console.log(expectedpounds);
    //Hago mi comparacion (la prueba)
    expect(pound).toBe(expectedpounds) // 5 yenes son 0.027 Libras
})

