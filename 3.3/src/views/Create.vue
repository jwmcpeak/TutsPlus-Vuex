<template>
    <div class="row">
        <div class="offset-sm-2 col-sm-8">
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="task">Task</label>
                    <input type="text" id="task" v-model="task" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea 
                        id="description"
                        v-model="description"
                        cols="30" rows="10" 
                        class="form-control"
                    ></textarea>
                </div>
                <div class="form-group">
                    <label for="status">Status</label>
                    <select 
                        id="status" 
                        v-model="status" 
                        class="form-control"
                    >
                        <option 
                            v-for="status in $store.state.statusCodes" 
                            :value="status.value"
                        >{{status.text}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary">Save TODO</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            task: '',
            description: '',
            status: ''
        };
    },
    methods: {
        submitForm() {
            var todo = {
                task: this.task,
                description: this.description,
                status: this.status
            };

            this.$store.commit('addTodo', todo);

            this.$router.push('/');
        }
    }
}
</script>
