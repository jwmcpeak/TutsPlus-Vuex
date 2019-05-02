<template>
    <div>
        <todo-item 
            v-for="todo in todos" 
            :key="todo.id" 
            v-bind="todo"
        ></todo-item>
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
    components: {TodoItem},
    props: ['todos']
}
</script>
