<template>
  <fieldset>
    <code>{{ $data }}</code>
    <br>
    <button @click="addTodo('grandchild1')">todos.push('grandchild1')</button>
    <button @click="inc">counter++</button>
  </fieldset>
</template>
<script>
import sharedStateMixin from './sharedState.mixin'

export default {
  name: 'Grandchild1',
  mixins: [sharedStateMixin],
  data: () => ({ me: 'grandchild1' })
}
</script>
