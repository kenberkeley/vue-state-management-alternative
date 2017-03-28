<template>
  <fieldset>
    <code>{{ $data }}</code>
    <br>
    <button @click="addTodo('grandchild1')">todos.push('grandchild1')</button>
    <button @click="inc">counter++</button>
  </fieldset>
</template>
<script>
import props$, { addTodo, inc } from '../../props'

export default {
  name: 'Grandchild1',
  data: () => ({ me: 'grandchild1', props$ }),
  methods: { addTodo, inc }
}
</script>
