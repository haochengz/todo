
<template>
    <section class="real-app">
        <input
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="What's next?"
            @keyup.enter="addTodo"
        />
        <Item
                v-for="item in items"
                :todo="item"
                :key="item.id"
                @del="deleteItem"
        />
        <tabs :filter="filter"></tabs>
    </section>
</template>

<script>
    import Item from './item.vue'
    import Tabs from './tabs.vue'
    let id = 0;
    export default {
        data() {
            return {
                items: [],
                filter: 'all'
            }
        },
        components: {
            Item,
            Tabs,
        },
        methods: {
            addTodo(e) {
                this.items.unshift({
                    id: id++,
                    content: e.target.value.trim(),
                    completed: false
                });
                e.target.value = ""
            },
            deleteItem(id) {
                this.items.splice(this.items.findIndex(todo => todo.id === id), 1)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .real-app{
        width 600px
        margin 0 auto
        box-shadow 0 0 5px #666
    }
    .add-input{
        position relative
        margin 0
        width 100%
        font-size 24px
        font-family inherit
        font-weight inherit
        line-height 1.4em
        border 0
        outline none
        color inherit
        padding 6px
        border 1px solid #999
        box-shadow inset 0 -1px 5px 0 rgba(0,0,0,0)
        box-sizing border-box
        font-smoothing antialiazed
        padding 16px 16px 16px 60px
        border none
        box-shadow inset 0 -2px 1px rgba(0,0,0,0)
    }
</style>