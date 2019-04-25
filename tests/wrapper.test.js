const classWrapper = require('../src/index')

const myObj = { a: 6, group() { return false }, street: 'my string' }

test('get prop a from constructor', () => {
  const wrapped = new classWrapper(myObj)
  expect(wrapped.a).toBe(6)
  expect(wrapped.group()).toBeFalsy()
  expect(wrapped.street).toBe('my string')
})

test('get prop a from static method', () => {
  const wrapped = classWrapper.wrap(myObj)
  expect(wrapped.a).toBe(6)
  expect(wrapped.group()).toBeFalsy()
  expect(wrapped.street).toBe('my string')
})
