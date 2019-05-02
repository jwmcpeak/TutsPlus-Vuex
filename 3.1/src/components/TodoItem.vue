<template>
    <div class="row todo-item mb-4">
        <div class="col">
            <div :class="statusClass" class="card shadow">
                <div class="card-body">
                    <h5>{{task}}</h5>
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
                hold: this.status === 'hold',
                complete: this.status === 'complete'
            };
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

.todo-item .card .card-body p {
    margin-bottom: 0;
}
</style>

