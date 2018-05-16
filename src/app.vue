<template>
    <div id="text">{{text}}</div>
</template>

<script>
    export default {
        name: "main",
        data() {
            return {
                text: "ABC"
            }
        }
    }
</script>

<style scoped>
    #text{
        color: purple;
    }
</style>