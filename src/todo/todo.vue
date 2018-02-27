<template>
  <section class="real-app">
      <input type="text" class="add-input" autofus="autofus" placeholder="接下去要做什么？" @keyup.enter="addTodo" />
      <Item :todo="todo" v-for="todo in todos" :key="todo.id" @del="deleteTodo"></Item>
      <Tabs :filter="filter"></Tabs>
  </section>
</template>
<script>
    import Item from './item.vue'
    import Tabs from './tabs.vue'
    let id=0;
    export default{
        name:'real-app',
        data(){
            return{
                todos:[],
                filter:'all'
            }
        },
        components:{
            Item,
            Tabs
        },
        methods:{
            addTodo(e){
                this.todos.unshift({
                    id:id++,
                    content:e.target.value.trim(),
                    completed:false
                })
                e.target.value='';
            },
            deleteTodo(id){
                this.todos.splice()
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .real-app
        width 600px
        margin 0 auto;
        box-shadow 0 0 5 #666
    .add-input  
        width 100%
        font-size 24px
        line-height 1.4em
        border 0
        outline none 
        padding 6px
        border 1px solid #999
        box-shadow inset 0 -1px 5px 0 rgba(0,0,0,.5)
        box-sizing border-box
        padding 16px
        border none 
        box-shadow inset 0 -2px 1px rgba(0,0,0,.5)
</style>

