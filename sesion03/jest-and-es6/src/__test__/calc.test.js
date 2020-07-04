import { sum, diff } from '../calc'
import sumTestCases from './calc.sum.testcases.json'

test('3 + 6 should be 9', () => {
  expect(sum(3, 6)).toBe(9)
})

test('3 + 6 should not be 6', () => {
  expect(sum(3, 6)).not.toBe(6)
})

test('3 - 6 should be -3', () => {
  expect(diff(3, 6)).toBe(-3)
})


for (let i = 0; i < sumTestCases.length; i++) {

  test(`${sumTestCases[i].number1} + ${sumTestCases[i].number2} should be ${sumTestCases[i].expect}`, () => {
    expect(
      sum(sumTestCases[i].number1, sumTestCases[i].number2)
    ).toBe(sumTestCases[i].expect)
  })

}