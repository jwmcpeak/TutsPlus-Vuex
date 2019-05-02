<template>
    <div>
        <ul>
            <li v-for="todo in todos">{{todo.task}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['todos']
}
</script>
