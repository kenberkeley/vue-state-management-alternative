<template>
  <fieldset>
    <code>{{ $data }}</code>
    <br>
    <button @click="resetTodos">todos = []</button>
    <button @click="resetCounter">counter = 0</button>
    <br><br>
    <child1 /><br>
    <child2 />
  </fieldset>
</template>
<script>
import sharedStateMixin from './sharedState.mixin'
import Child1 from './Child1'
import Child2 from './Child2'

export default {
  name: 'App',
  mixins: [sharedStateMixin],
  components: { Child1, Child2 },
  data: () => ({ me: 'app' })
}
</script>
