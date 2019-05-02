<template>
    <div class="row todo-item mb-4">
        <div class="col">
            <div :class="statusClass" class="card shadow">
                <div class="card-body">
                    <h5>
                        {{task}}
                        <button 
                            class="btn btn-danger btn-sm float-right"
                            @click.prevent="markForDelete"
                        >
                            delete
                        </button>
                    </h5>
                    <p>{{description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['id', 'task', 'description', 'status'],
    computed: {
        statusClass() {
            return {
                'alert-danger': this.marked,
                hold: this.status === 'hold',
                complete: this.status === 'complete'
            };
        },
        marked() {
            return this.$store.state.toDelete.indexOf(this.id) > -1;
        }
    },

    methods: {
        markForDelete() {
            this.$store.commit('toggleDelete', this.id);
        }
    }
}
</script>

<style>
.todo-item .card {
    border-left: .25rem solid #4e73df;
}

.todo-item .card.complete {
    border-left-color: #1cc88a;
}

.todo-item .card.hold {
    border-left-color: #e74a3b;
}

.todo-item .card .card-body h5 {
    color: #5a5c69;
}

.todo-item .card .card-body h5 button {
    visibility: hidden;
}

.todo-item:hover .card .card-body h5 button {
    visibility: visible;
}

.todo-item .card .card-body p {
    margin-bottom: 0;
}
</style>

