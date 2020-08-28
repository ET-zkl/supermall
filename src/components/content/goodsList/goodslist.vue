<template>
  <div class="goodslist">
    <goodslistitem v-for='(item,index) in goods' :key='index' :goodsitem="item"></goodslistitem>
  </div>
</template>

<script>

import goodslistitem from './goodslistitem'

export default {
  name: '',
  props: {
      goods:{
          type: Array,
          default(){
              return []
          }
      }
  },
  components:{
      goodslistitem
  }
}
</script>

<style scoped>
.goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
