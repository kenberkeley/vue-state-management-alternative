<template>
  <fieldset>
    <code>{{ $data }}</code>
    <br>
    <button @click="resetTodos">reset todos</button>
    <button @click="resetCounter">reset counter</button>
    <br><br>
    <child1></child1><br>
    <child2></child2>
  </fieldset>
</template>
<script>
import props$, { resetTodos, resetCounter } from './props'
import Child1 from './children/Child1'
import Child2 from './children/Child2'

export default {
  name: 'App',
  components: { Child1, Child2 },
  data: () => ({ me: 'app', props$ }),
  methods: { resetTodos, resetCounter }
}
</script>
