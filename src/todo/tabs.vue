<template>
  <div class="helper">
      <span class="left">2 items left</span>
      <span class="tabs">
          <span v-for="state in states" :key="state" :class="[state,filter===state?'active':'']" 
            @click="toggleFilter(state)">
            {{state}}
          </span>
      </span>
      <span class="clear" @click="clearAllCompleted">Clear Completed</span>
  </div>
</template>
<script>
    export default{
        props:{
            filter:{
                type:String,
                required:true
            }
        },
        data(){
            return{
                states:["all","active","completed"]
            }
        },
        methods:{
            toggleFilter(state){

            },
            clearAllCompleted(){

            }
        }
    }
</script>
<style lang="stylus" scoped>
    .helper
        display flex
        font-weight 100
        justify-content space-between
        padding 5px 0
        ine-height 30px
        background #ffffff
        font-size 14px
        font-smoothing antialiased 
    .left,.clear,.tabs
        padding 0 10px
        box-sizing border-box
    .left,.clear
        width 150px

    .left 
        text-align center 
    .clear
        text-align:right
        cursor pointer 
    .tabs
        width 200px
        display flex
        justify-content space-around
    *
        display inline-block
        padding 0 10px
        cursor pointer 
        border 1px solid rgba(175,47,47,0)
        &.active
            border-color rgba(175,47,47,0.4)
            border-radius 5px              
</style>

