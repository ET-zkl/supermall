<template>
<div>
<tabbar>
      <tabbaritem path='/home' activeColor='red'>        
        <img slot='tabbar-icon' src="../../../assets/img/tabbar/home.svg" alt="">
        <img slot='tabbar-icon-active' src="../../../assets/img/tabbar/home_active.svg" alt="">        
        <div slot='tabbar-text'>首页</div>
      </tabbaritem>
      <tabbaritem path='/category' activeColor='pink'>        
        <img slot='tabbar-icon' src="../../../assets/img/tabbar/category.svg" alt="">
        <img slot='tabbar-icon-active' src="../../../assets/img/tabbar/category_active.svg" alt="">
        <div slot='tabbar-text'>分类</div>
      </tabbaritem>
      <tabbaritem path='/cart' activeColor='pink'>        
        <img slot='tabbar-icon' src="../../../assets/img/tabbar/shopcart.svg" alt="">
        <img slot='tabbar-icon-active' src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot='tabbar-text'>购物车</div>
      </tabbaritem>
      <tabbaritem path='/profile' activeColor='pink'>        
        <img slot='tabbar-icon' src="../../../assets/img/tabbar/profile.svg" alt="">
        <img slot='tabbar-icon-active' src="../../../assets/img/tabbar/profile_active.svg" alt="">
        <div slot='tabbar-text'>我的</div>
      </tabbaritem>
    </tabbar>
</div>
</template>

<script>



import tabbar from '../../common/tabbar/tabbar';
import tabbaritem from '../../common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components:{
    tabbar,
    tabbaritem
  }
}
</script>

<style scoped>

</style>
