<template>
    <div>
        <div class="row mb-4">
            <div class="col">
                <button 
                    class="btn btn-danger float-right"
                    v-show="$store.state.toDelete.length > 0"
                >
                    Delete {{$store.state.toDelete.length}} TODOs
                </button>
            </div>
        </div>
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
