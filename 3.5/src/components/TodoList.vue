<template>
    <div>
        <div class="row mb-4">
            <div class="col">
                <button 
                    class="btn btn-danger float-right"
                    v-show="$store.getters.selectedCount > 0"
                    @click.prevent="deleteItems"
                >
                    Delete {{$store.getters.selectedCount}} TODOs
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
    props: ['todos'],
    methods: {
        deleteItems() {
            this.$store.dispatch('deleteSelectedTodos').then(() => {
                alert('Items deleted');
            });
        }
    }
}
</script>
