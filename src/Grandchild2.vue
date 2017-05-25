<template>
  <fieldset>
    <code>{{ $data }}</code>
    <br>
    <button @click="addTodo('grandchild2')">todos.push('grandchild2')</button>
    <button @click="dec">counter--</button>
  </fieldset>
</template>
<script>
import sharedStateMixin from './sharedState.mixin'

export default {
  name: 'Grandchild2',
  mixins: [sharedStateMixin],
  data: () => ({ me: 'grandchild2' })
}
</script>
