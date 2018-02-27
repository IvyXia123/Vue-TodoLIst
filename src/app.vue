<template>
  <div id="app">
    <div id="cover"></div>
    <Header></header>
    <Footer></Footer>
    <Todo></Todo>
  </div>
</template>
<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'
export default {
  data(){
      return{
          
      }
  },
  components:{
    Header,
    Footer,
    Todo
  }
}
</script>
<style lang='stylus'>
  #app{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    #cover{
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background:#999;
      opacity:.8;
      z-index:-1;
    }
  }
</style>

