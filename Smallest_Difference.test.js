const sd = require('../42i-Challenge-tecnico-Developer-FullstackJr.-MateoLaria/Smallest_Difference')

test('Test diferencia minima positiva', () => {
    const a = [1, 3, 15, 11, 2];
    const b = [23, 127, 235, 19, 8];

    expect (sd(a, b)).toBe(3);
});

test('Test de diferencias a 0', () => {
    const a = [5, 10, 15];
    const b = [5, 10, 15];

    expect(sd(a, b)).toBe("No existen diferencias positivas");
});

test('Test de diferencia minima positiva 2', () => {
    const a = [10, 5, 40];
    const b = [50, 90, 80];

    expect (sd(a, b)).toBe(10);
});


test('Test array vacio', () => {
    const a = [];
    const b = [5, 10, 15];

    expect(sd(a, b)).toBe("No existen diferencias positivas");
});

test('Test diferencia minima positiva 3', () => {
    const a = [0];
    const b = [5, 10, 15];

    expect(sd(a, b)).toBe(5);
});

test('Test vacio', () => {
    const a = '';
    const b = [5, 10, 15];

    expect(sd(a, b)).toBe("No es un Array");
})
test('Test numero', () => {
    const a = 1;
    const b = [5, 10, 15];

    expect(sd(a, b)).toBe("No es un Array");
});
test('Test valor null', () => {
    const a = null;
    const b = [5, 10, 15];

    expect(sd(a, b)).toBe("No es un Array");
});
