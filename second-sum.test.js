const {sum} = require('./second-sum.js')

describe('here is a test that check the sum function', () => {
    it('adds 4 + 6 + 2 to equal 12', () => {
        expect(sum(4,6,2)).toBe(12)
    }),
    it('adds 3 + 3 + 3 to equal 9', () => {
        expect(sum(3,3,3)).toBe(9)
    })
})