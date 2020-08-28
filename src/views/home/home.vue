<template>
 <div id="home">
    <navbar id="home-nav"><div slot="center">购物街</div></navbar>
    <tabcontrol class="tabcontrol" 
                  :titles="['流行','新款','精选']" 
                  @tabclick='tabclick' ref='tabControl1' v-show="isTabFixed"></tabcontrol>
    <scroll class="content" ref='scroll' 
            :probe-type='3' :pull-up-load='true' 
            @pullingUp='loadMore' @scroll='contentclick'>
      <homesuper :banners="banners" @swipperimageload='swipperimageload'></homesuper>
      <homerecommend :recommends="recommends"></homerecommend>
      <featureview></featureview>
      <tabcontrol class="tabcontro" 
                  :titles="['流行','新款','精选']" 
                  @tabclick='tabclick' ref='tabControl2'></tabcontrol>
      <goodslist :goods="goods[currentType].list"></goodslist>
    </scroll>

    <backtop @click.native='backclick' v-show="isShowBacktop"></backtop>
  </div>
</template>

<script>

import navbar from '../../components/common/navbar/NavBar'
import tabcontrol from '../../components/content/tabControl/TabControl'

import {getHomeMultidata, getHomeGoods} from '../../network/home';
import homesuper from './childrencomps/HomeSwiper'
import homerecommend from './childrencomps/HomdeRecom'
import featureview from './childrencomps/featureview'
import goodslist from '../../components/content/goodsList/goodslist'
import  scroll from '../../components/common/scroll/Scroll'
import backtop from '../../components/content/backTop/BackTop'

import {debounce} from '../../components/common/utils'

export default {
  name: 'home',
  components:{
    navbar,
    tabcontrol,
    homesuper,
    homerecommend,
    featureview,
    goodslist,
    scroll,
    backtop
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},//流行
        'new':{page:0,list:[]},//新款
        'sell':{page:0,list:[]}//精选
      },
      currentType:'pop',
      isShowBacktop: false,
      tabControlTop: 0,
      isTabFixed: false,
      saveY: 0,
    }
  },
  //销毁
  destroyed(){

  },
  //活跃
  activated(){
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll.scroll.refresh();
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y;
  },
  created(){
    //请求多个数据
    this.getHomeMultidata();
    //2、请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

    //在created中监听有可能scroll还没有创建完成
    // //3、监听item中图片加载完成
    // this.$bus.$on('itemImageLoad',()=>{
    //   this.$refs.scroll.scroll.refresh(); 
    // })
  },
  mounted(){

    //3、监听item中图片加载完成 防抖
    const refresh = debounce(this.$refs.scroll.scroll.refresh, 50);
    //闭包
    this.$bus.$on('homeitemImageLoad',()=>{
      console.log('--------');
      // this.scroll && this.$refs.scroll.scroll.refresh(); 
      refresh();
      // console.log(this.$refs.tabControl.$el.offsetTop);
    })

    // 获取tabcotrol的offsetTop值
  },
  methods:{    
    //请求数据
    tabclick(index){
      const typeary=['pop','new','sell']
      this.currentType = typeary[index];

      //保持两个tabControl一致
      console.log(this.$refs.tabControl1);
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backclick(){
      //返回顶部按钮
      //scroll组件的scroll属性
      this.$refs.scroll.scroll.scrollTo(0,0,500);//500毫秒内
    },
    contentclick(position){
      //判断backTop是否显示
      this.isShowBacktop = (-position.y) > 1000;

      //tabcontrol是否吸顶
      this.isTabFixed = (-position.y) > this.tabControlTop
    },
    loadMore(){
      console.log('scroll');
      this.getHomeGoods(this.currentType);
      //刷新，重新计算可滚动的高度
      this.scroll && this.$refs.scroll.scroll.refresh();
    },
    swipperimageload(){
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
    },
    //网络请求
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        //console.log(res);
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      //动态获取每一页
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res=>{
        //获取数据
        // console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+=1;
        
        //完成上拉加载更多
        this.$refs.scroll.scroll.finishPullUp();
      })
    }
  }
}
</script>

<style scoped>
#home{
  height: 100vh;
  /* margin-top: 44px; */
}
#home-nav{
  background-color: deeppink;
  color: #fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.fixed{
  position: relative;
  top: 0;
}
.tabcontrol{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}
.content{
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>
