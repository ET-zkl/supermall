<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" 
    :class="{active: index == currentIndex}" @click="itemclick(index)">
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles:{
        type:Array,
        default(){
            return[]
        }
    }
  },
  data(){
        return{
            currentIndex:0
        }
  },
  methods:{
        itemclick(index){
            this.currentIndex = index;
            this.$emit('tabclick',index)
        }
  }
}
</script>

<style scoped>
.tab-control{
    display: flex;
    font-size: 15px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;
}
.tab-control-item{
    flex: 1;
    /* border-bottom: 5px solid pink; */
}
.tab-control-item span{
    padding: 5px ;
}
.active{
    color: deeppink;
}
.active span{
    border-bottom: 3px solid deeppink;
}
</style>
