const stringLength = require('./stringLength.js')

test('Checking the length of the string', () =>{
    expect(stringLength('tayo')).toBe(4)
})

test('Check if the length is less than 1 and not longer than 10', () =>{
    expect(stringLength('tayakande')).toBeGreaterThan(1);
    expect(stringLength('tayakande')).toBeLessThan(10)
})