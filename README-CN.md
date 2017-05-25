# Vue 另类状态管理

我们都知道 Vue 2.x 移除了 `.sync`（`v2.3` 又回来了一个[阉割版](https://vuejs.org/v2/guide/components.html#sync-Modifier)的）  
尤其是对于 `props` 传递深度较浅的情况下，会多写一些冗余繁琐的代码  
文档提到用 `v-model` 在组件上实现[双向绑定](http://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events)，也实在是太鸡肋了  
官方推荐使用 Vuex，但对于**独立封装**的组件，一般是不应该引入的  
业界虽然推崇 `单向数据流` 最佳实践，但也要权衡开发效率、易维护性与直观性

在参阅了文档中的

* [`data` 必须是函数](http://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function)
* [状态管理](http://vuejs.org/v2/guide/state-management.html)

我们可以另辟蹊径，自行实现出简易另类的状态管理  

先来看看 `src/sharedState.mixin.js`：

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

应用到如下组件树中：

```
App
 ├─ Child1
 |    └─ Grandchild1
 └─ Child2
      └─ Grandchild2
```

最终结果见[在线 demo](https://kenberkeley.github.io/vue-state-management-alternative/dist/)  

> 建议进入 [`src/`](./src) 了解如何使用  
> 本方式适用于 Vue 1.x / 2.x

***

### 本地测试

```
$ git clone https://github.com/kenberkeley/vue-state-management-alternative.git
$ cd vue-state-management-alternative
$ npm i
$ npm start
```
