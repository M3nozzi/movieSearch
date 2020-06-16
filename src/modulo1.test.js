const modulo1 = require('./modulo1.js')

describe('basic feature', () => {
    it('should return the right value', () => {
        expect(modulo1.func1(10)).toBe(11)
    })
} )