// The magic of state persistance is closure here
export const sharedState = {
  todos: [],
  counter: 0
}

export const resetTodos = () => sharedState.todos = []
export const resetCounter = () => sharedState.counter = 0
export const addTodo = (s) => sharedState.todos.push(s)
export const inc = () => sharedState.counter++
export const dec = () => sharedState.counter--

/**
 * @exports.default {Mixin}
 */
export default {
  data: () => ({
    sharedState
  }),
  methods: {
    resetTodos,
    resetCounter,
    addTodo,
    inc,
    dec
  }
}

/*

  You can access the shared state and methods
  not only within Vue component (as mixins) but also in common js files

  ※ e.g.
  import { sharedState, inc } from '<path to>/sharedState.mixin'
  
  console.info(sharedState.counter) // 0
  inc()
  console.info(sharedState.counter) // 1
 
 */
