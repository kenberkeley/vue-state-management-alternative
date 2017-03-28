const props = { todos: [], counter: 0 }
export default props

export const resetTodos = () => props.todos = []
export const resetCounter = () => props.counter = 0
export const addTodo = (s) => props.todos.push(s)
export const inc = () => props.counter++
export const dec = () => props.counter--
