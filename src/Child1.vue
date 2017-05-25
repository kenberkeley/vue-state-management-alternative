<template>
  <fieldset>
    <code>{{ $data }}</code>
    <br>
    <button @click="addTodo('child1')">todos.push('child1')</button>
    <button @click="inc">counter++</button>
    <br><br>
    <grandchild1 />
  </fieldset>
</template>
<script>
import sharedStateMixin from './sharedState.mixin'
import Grandchild1 from './Grandchild1'

export default {
  name: 'Child1',
  mixins: [sharedStateMixin],
  components: { Grandchild1 },
  data: () => ({ me: 'child1' })
}
</script>
