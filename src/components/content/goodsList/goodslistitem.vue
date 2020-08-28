<template>
  <div class="goodslist-item" @click='itemclick'>
    <img :src="showImages" alt="" @load="imageLoad">
    <div class="goodsinfo">
        <p>{{goodsitem.title}}</p>
        <span class="price">￥{{goodsitem.price}}</span>
        <span class="collect">⭐{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
      goodsitem:{
          type: Object,
          default(){
              return{}
          }
      }
  },
  computed:{
      showImages(){
          return this.goodsitem.image || this.goodsitem.show.img
      }
  },
  methods:{
      //发出事件，图片加载完成
      imageLoad(){
          if(this.$route.path === '/home'){
            this.$bus.$emit('homeitemImageLoad');
          }else if(this.$route.path === '/detail'){
              console.log('/detail');
            this.$bus.$emit('detailitemImageLoad');
          }
      },
      itemclick(){
          //用push可以记录返回
        //   console.log(this.goodsitem);
          this.$router.push('/detail/' + this.goodsitem.iid)
      }
  }
}
</script>

<style scoped>
.goodslist-item{
    /* flex: 1; */
    width: 48%;
    height: 100%;
    padding-bottom: 10px;
    text-align: center;
}
.goodsinfo{
    font-size: 14px;
    font-weight: 900;
}
.goodsinfo p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.goodslist-item img{
    width: 100%;
    border-radius: 5px;
}
.price{
    color: deeppink;
    overflow: hidden;
    margin-right: 10px;
}
</style>
