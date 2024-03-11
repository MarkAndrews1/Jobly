const {sqlForPartialUpdate} = require('./sql')

describe('sqlForPartialUpdate', function(){
    test('tests sqlForPartialUpdate', function(){
        const result = sqlForPartialUpdate(
            { firstName: 'Mark', age: 18 },
            { firstName: 'first_name' })

        const expectedResult = {
            setCols: '"first_name"=$1, "age"=$2',
            values: ['Mark', 18]
        }

        expect(result).toEqual(expectedResult)
    })
})