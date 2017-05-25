# Alternative state management for Vue

> [Chinese README - 中文说明](./README-CN.md)

`.sync` is deprecated in Vue 2.x (**UPDATE:** a castration edition is back in `v2.3`)  
Especially for the case that `props` passed shallowly, you have to write more verbose code  
The docs mentioned using `v-model` as a [hack](http://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events) which sounds hardly elegant  
Also, the official solution `Vuex` is not suitable for independent components  
We all know **one-way data flow** is a best practice  
but development efficiency, maintainability, simple and straight-forward should all be taken into consideration

After reviewing the below contents of the docs:

* [`data` Must Be a Function](http://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function)
* [State Management](http://vuejs.org/v2/guide/state-management.html)

We can implement an awesome state management solution ourselves

Firstly, Take a look at `src/sharedState.mixin.js`:

```js
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
```

Then, apply to the component tree below:

```
App
 ├─ Child1
 |    └─ Grandchild1
 └─ Child2
      └─ Grandchild2
```

Finally we get an [online demo](https://kenberkeley.github.io/vue-state-management-alternative/dist/)  

> It's highly suggested to dive into [`src/`](./src) to learn about how to use it  
> This solution is applicable for Vue 1.x / 2.x

***

### Test it yourself

```
$ git clone https://github.com/kenberkeley/vue-state-management-alternative.git
$ cd vue-state-management-alternative
$ npm i
$ npm start
```
