<template>
    <div id="text">{{text}}</div>
</template>

<script>
    export default {
        name: "main",
        data() {
            return {
                text: "ABCDE"
            }
        }
    }
</script>

<style scoped>
    #text {
        color: purple;
    }
    body{
        background-image: url("./assets/images/bg.jpg");
    }
</style>