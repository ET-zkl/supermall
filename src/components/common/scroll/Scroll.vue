<template>
  <div class="wrapper" ref='wrapper'>
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll';


export default {
  name: 'Scroll',
  props:{
      probeType:{
          type: Number,
          default: 0
      },
      pullUpLoad:{
          type: Boolean,
          default: false,
      }
  },
  data(){
      return{
          scroll:null
      }
  },
  mounted(){
      //1、创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
          click: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad
      })
      //2、监听滚动的位置if(this.probeType==2||==3)
      this.scroll.on('scroll',(position)=>{
        //   console.log(position);
          //通过自定义事件向父级传参数，把当前滚动距离传给父级
          this.$emit('scroll',position);
      })
      console.log(this.scroll);
      //3、监听上拉事件if(this.pullUpLoad)
      this.scroll.on('pullingUp',()=>{
          console.log('上拉加载');
          this.$emit('pullingUp')
      })
  }
}
</script>

<style scoped>

</style>
