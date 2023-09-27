const ncc = require('./Non-Constructible_Change');

test('Test minimo posible', () => {
    const coins = [5, 7, 1, 1, 2, 3, 22];

    expect(ncc(coins)).toBe(20);
});
test('Test minnimo posible 2', () => {
    const coins = [1, 2, 3];

    expect(ncc(coins)).toBe(7);
});
test('Test Array vacio', () => {
    const coins = [];
    
    expect(ncc(coins)).toBe(1);
});

test('Test array null', () => {
    const coins = null;
    
    expect(ncc(coins)).toBe("ERROR");
});

test('Test array vacio', () => {
    const coins = '';
    
    expect(ncc(coins)).toBe("ERROR");
});
test('Test string', () => {
    const coins = 'a';
    
    expect(ncc(coins)).toBe("ERROR");
});
test('Test array string', () => {
    const coins = ['a','b'];
    
    expect(ncc(coins)).toBe("ERROR");
});
test('Test numero', () => {
    const coins = 5;
    
    expect(ncc(coins)).toBe("ERROR");
});