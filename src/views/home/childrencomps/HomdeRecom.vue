<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  props:{
      recommends:{
          type:Array,
          default(){
              return []
          }
      }
  },
}
</script>

<style scoped>
.recommend{
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
    
    font-family: 12px;
}
.recommend-item{
    flex: 1;
    color: #000;
    font-weight: 900;
}
.recommend-item img{
    width: 80%;
    margin-bottom: 5px;
}
</style>
