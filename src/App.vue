
<template>
  <div id="app">
    <!-- 详情页不需要保持原来的数据，排除掉 -->
  <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
  <maintabbar></maintabbar>
  </div>
</template>

<script>

import maintabbar from './components/content/MaintabBar/MainTabBar'

  export default {
  name: 'App',
  components:{
    maintabbar
  }
}
</script>
<style scoped>
@import './assets/css/base.css';


</style>
