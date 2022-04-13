const { calculateComplexity, PasswordComplexityValues } = require("../PasswordComplexity")

describe('Password complexity tests', () => {
    it('should be excellent current', () => {
        const complexity = calculateComplexity('password123')
        expect(complexity).toEqual(PasswordComplexityValues.EXCELLENT)
    })

    it('should be good', () => {
        const complexity = calculateComplexity('password')
        expect(complexity).toEqual(PasswordComplexityValues.GOOD)
    })
    
    it('should be weak', () => {
        const complexity = calculateComplexity('pass')
        expect(complexity).toEqual(PasswordComplexityValues.WEAK)
    })   
    
    // it('should be good', () => {
    //     const complexity = calculateComplexity('123456789')
    //     expect(complexity).toEqual(PasswordComplexityValues.GOOD)
    // })
})