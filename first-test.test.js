const { checkUser } = require('./first-test')

describe('', () => {
    describe('Group1', () => {
        test('Can this person drink beer', (done)=> {
            expect.hasAssertions()

            const user = {age: 23}

            checkUser(user, (age)=> {
                expect(age).toBe(user.age)
                done()
            })
        })
    })
})