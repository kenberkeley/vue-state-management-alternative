<template>
  <fieldset>
    <code>{{ $data }}</code>
    <br>
    <button @click="addTodo('child2')">todos.push('child2')</button>
    <button @click="dec">counter--</button>
    <br><br>
    <grandchild2 />
  </fieldset>
</template>
<script>
import sharedStateMixin from './sharedState.mixin'
import Grandchild2 from './Grandchild2'

export default {
  name: 'Child2',
  mixins: [sharedStateMixin],
  components: { Grandchild2 },
  data: () => ({ me: 'child2' })
}
</script>
