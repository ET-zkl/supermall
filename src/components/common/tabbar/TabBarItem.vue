<template>
    <div class="tab-bar-items" @click='itemClick'> 
      <div v-if='!isActive'><slot name='tabbar-icon'></slot></div>
      <div v-else><slot name='tabbar-icon-active'></slot></div>
      <div :style='activeStyle'><slot name='tabbar-text'></slot></div>          
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path:String,
    activeColor:{
      type: String,
      default:'pink'
    }
  },
  data(){
    return{
      //isActive:true
    }
  },
  computed:{
    isActive(){
    //活跃的时候isACtive的值是false
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
    
.tab-bar-items{
  flex: 1;
  text-align: center;  
  font-size: 14px;
  margin-top: 3px;
}
.tab-bar-items img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: -2px;
}
.active{
  color: pink;
}
</style>
