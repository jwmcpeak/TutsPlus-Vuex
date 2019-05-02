<template>
    <div>
        <div class="row mb-4">
            <div class="col">
                <button 
                    class="btn btn-danger float-right"
                    v-show="count > 0"
                    @click.prevent="deleteSelectedTodos"
                >
                    Delete {{count}} TODOs
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
import {mapGetters, mapActions} from 'vuex';
export default {
    components: {TodoItem},
    props: ['todos'],
    computed: {
        foo() {
            return 'bar';
        },
        ...mapGetters({
            count: 'selectedCount'
        })
    },
    methods: {
        ...mapActions(['deleteSelectedTodos'])
        // deleteItems() {
        //     this.$store.dispatch('deleteSelectedTodos').then(() => {
        //         alert('Items deleted');
        //     });
        // }
    }
}
</script>
