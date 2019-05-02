<template>
  <todo-list :todos="todos" />
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'home',
  props: ['todos'],
  components: {TodoList},
  created() {
    this.$store.dispatch('getTodos');
  }
}
</script>
