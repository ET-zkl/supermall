<template>
  <div>
    <navbar>
        <div slot="left" class="leftback" @click="backclick">
            <img src="../../../assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="title">
            <div v-for="(item,index) in titles" :key="index" class="titleitem"
            :class='{active: currentIndex === index}' @click='titleclick(index)'>{{item}}</div>
        </div>
    </navbar>
  </div>
</template>

<script>

import navbar from '../../../components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components:{
    navbar
  },
  data(){
      return{
          titles:['商品','参数','评论','推荐'],
          currentIndex: 0
      }
  },
  methods:{
      titleclick(index){
          this.currentIndex = index;
          this.$emit('titleclick',index)
      },
      backclick(){
          this.$router.go(-1);
      }
  }
}
</script>

<style scoped>
.title{
    display: flex;
}
.titleitem{
    flex: 1;
    font-size: 14px;;
}
.active{
    color: deeppink;
}
.leftback img{
    margin-top: 12px;
}
</style>
