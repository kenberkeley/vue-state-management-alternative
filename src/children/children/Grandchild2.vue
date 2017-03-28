<template>
  <fieldset>
    <code>{{ $data }}</code>
    <br>
    <button @click="addTodo('grandchild2')">todos.push('grandchild2')</button>
    <button @click="dec">counter--</button>
  </fieldset>
</template>
<script>
import props$, { addTodo, dec } from '../../props'

export default {
  name: 'Grandchild2',
  data: () => ({ me: 'grandchild2', props$ }),
  methods: { addTodo, dec }
}
</script>
