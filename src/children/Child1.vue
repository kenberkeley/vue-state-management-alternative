<template>
  <fieldset>
    <code>{{ $data }}</code>
    <br>
    <button @click="addTodo('child1')">todos.push('child1')</button>
    <button @click="inc">counter++</button>
    <br><br>
    <grandchild1></grandchild1>
  </fieldset>
</template>
<script>
import props$, { addTodo, inc } from '../props'
import Grandchild1 from './children/Grandchild1'

export default {
  name: 'Child1',
  components: { Grandchild1 },
  data: () => ({ me: 'child1', props$ }),
  methods: { addTodo, inc }
}
</script>
