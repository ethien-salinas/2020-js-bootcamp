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

sumTestCases.forEach(testCase => {
  test(`${testCase.number1} + ${testCase.number2} should be ${testCase.expect}`, () => {
    expect(
      sum(testCase.number1, testCase.number2)
    ).toBe(testCase.expect)
  })
})
