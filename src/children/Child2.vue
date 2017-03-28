<template>
  <fieldset>
    <code>{{ $data }}</code>
    <br>
    <button @click="addTodo('child2')">todos.push('child2')</button>
    <button @click="dec">counter--</button>
    <br><br>
    <grandchild2></grandchild2>
  </fieldset>
</template>
<script>
import props$, { addTodo, dec } from '../props'
import Grandchild2 from './children/Grandchild2'

export default {
  name: 'Child2',
  components: { Grandchild2 },
  data: () => ({ me: 'child2', props$ }),
  methods: { addTodo, dec }
}
</script>
