import {addTodo, findById, toggleTodo, updateTodo} from './todoHelpers'

test('addTodo should add the passed todo to the list', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const newTodo = {id: 3, name: 'three', isComplete: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const result = addTodo(startTodos, newTodo)
  expect(result).toEqual(expected)
  expect(result).not.toBe(startTodos)
})

test('findById should return the expected item from the array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const expected = {id: 2, name: 'two', isComplete: false}
  const result = findById(2, startTodos)
  expect(result).toEqual(expected)
})

test('toggleTodo should toggle the isComplete prop of a todo without mutating the original', () => {
  const startTodo =  {id: 2, name: 'two', isComplete: false}
  const expected =  {id: 2, name: 'two', isComplete: true}
  const result = toggleTodo(startTodo)
  expect(result).toEqual(expected)
  expect(result).not.toBe(startTodo)
})


test('updateTodo should update an item by id without mutating the original', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const updatedTodo = {id: 2, name: 'two', isComplete: true}
  const expectedTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ]
  const result = updateTodo(startTodos, updatedTodo)
  expect(result).toEqual(expectedTodos)
  expect(result).not.toBe(startTodos)
})