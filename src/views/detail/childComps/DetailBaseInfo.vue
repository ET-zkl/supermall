<template>
<!-- 空对象不渲染，判断goods是否是空值 -->
  <div v-if="Object.keys(goods).length != 0" class="base-info">
<!-- <div> -->
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
        <span class="n-price">{{goods.newPrice}}</span>
        <span class="o-price">{{goods.oldPrice}}</span>
        <span v-if='goods.discount' class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-services">
        <span class="info-services-item" v-for="index in goods.services.length-1"
        :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
      goods:{
          type:Object,
          default(){
              return{}
          }
      }
  }
}
</script>

<style scoped>
.base-info{
    border-bottom: 4px solid rgb(226, 223, 223);;
    padding: 0 5px;
}
.info-title{
    font-size: 16px;
    font-weight: 900;
    margin: 10px 0;
}
.info-price{
    margin-bottom: 20px;
}
.n-price{
    color: deeppink;
    font-size: 18px;
    font-weight: 900;
}
.o-price{
    margin-left: 10px;
    text-decoration: line-through;
    color: #a4a7a7;
    font-weight: 900;
}
.discount{
    position: relative;
    top: -8px;
    left: 5px;
    padding: 3px;
    background-color: deeppink;
    border-radius: 10px;
    color: white;
    font-weight: 900;
}
.info-other{
    display: flex;
    border-bottom: 2px solid rgb(226, 223, 223);
    /* margin-bottom: 5px; */
    padding-bottom: 5px;
    color: #a4a7a7;
    font-weight: 900;

}
.info-other span{
    flex: 1;      
    justify-content: space-between;
}
.info-services{
    display: flex;
    margin: 15px 0;
}
.info-services span{
    /* font-weight: 900; */
     flex: 1;
}
.info-services img{
    width: 12px;
}
</style>
