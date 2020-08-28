<template>
  <div id="detail">
    <detailnarbar @titleclick='titleclick' ref='detailnav'></detailnarbar>
    <bscroll class="content" ref="scroll" :probe-type='3' @scroll='contentscroll'>
      <detailswipper :topImages='topImages'></detailswipper>
      <detailbaseinfo :goods="goods"></detailbaseinfo>
      <detailshopinfo :shop='shopInfo'></detailshopinfo>
      <detailgoodsinfo :detail-info='detailInfo' @detailRefresh='detailRefresh'></detailgoodsinfo>
      <detailparamsinfo ref='param' :param-info='paraminfo'></detailparamsinfo>
      <detailcommendinfo ref='comment' :comment-info='commentInfo'></detailcommendinfo>
      <goodslist ref='recommend' :goods="recommends"></goodslist>
    </bscroll>
      <detailbottombar @addCart='addCart'></detailbottombar>

    <backtop @click.native='backclick' v-show="isShowBacktop"></backtop>
  </div>
</template>

<script>

import detailnarbar from './childComps/DetailNavBar'
import detailswipper from './childComps/DetailSwipper'
import detailbaseinfo from './childComps/DetailBaseInfo'
import detailshopinfo from './childComps/DetailShopInfo'
import detailgoodsinfo from './childComps/DetailGoodsInfo'
import detailparamsinfo from './childComps/DetailParamInfo'
import detailcommendinfo from './childComps/DetailCommentInfo'
import goodslist from '../../components/content/goodsList/goodslist'
import detailbottombar from './childComps/DetailBottomBar'
import backtop from '../../components/content/backTop/BackTop'

import {getDetail,Goods,Shop,GoodsParam, getRecommend} from '../../network/detail'
import bscroll from '../../components/common/scroll/Scroll'

import {debounce} from '../../components/common/utils'
export default {
  name: 'Detail',
  data(){
      return{
        iid: null,
        topImages: [],
        goods: {},
        shopInfo:{},
        detailInfo:{},
        paraminfo:{},
        commentInfo:{},
        recommends:[],
        themeTopYs:[],
        getThemeTopY:null,
        currentIndex:0,
        isShowBacktop: false,
        product:{},
      }
  },
  components:{
      detailnarbar,
      detailswipper,
      detailbaseinfo,
      detailshopinfo,
      bscroll,
      detailgoodsinfo,
      detailparamsinfo,
      detailcommendinfo,
      goodslist,
      detailbottombar,
      backtop,
  },
  created(){
      //1、保存传入的id
      this.iid = this.$route.params.iid;
      //2、根据id请求详情数据
      getDetail(this.iid).then((res)=>{
        //   console.log(res);
        //1、获取顶部轮播图片
        const data = res.result;
        this.topImages = res.result.itemInfo.topImages

          
        //2、获取商品信息      
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //3、获取店铺信息
        this.shopInfo = new Shop(data.shopInfo);
        //4、获取商品详细介绍信息
        this.detailInfo = data.detailInfo
        //5、获取商品参数
        console.log(data);
        this.paraminfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);
        //6、获取评论
        if(data.rate.cRate != 0){
          this.commentInfo = data.rate.list[0];
        }

        
        // //dom已经被渲染出来，但还没有图片,所以获取的值还是不对的
        // this.$nextTick(()=>{
        //   this.themeTopYs=[];
        //   this.themeTopYs.push(0);
        //   this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        //   console.log(this.themeTopYs);
        // })


      })

      getRecommend().then((res)=>{
          this.recommends = res.data.list;
      })

      this.getThemeTopY = debounce(()=>{
        this.themeTopYs=[];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.themeTopYs);
      },50)
  },
  mounted(){
       //3、监听item中图片加载完成 防抖
    const refresh = debounce(this.$refs.scroll.scroll.refresh, 50);
    //闭包
    this.$bus.$on('detailitemImageLoad',()=>{
      // console.log('--------');
      // this.scroll && this.$refs.scroll.scroll.refresh(); 
      refresh();
      this.getThemeTopY();
      console.log('----------');
      // console.log(this.$refs.tabControl.$el.offsetTop);
    })
  },
  methods:{
      detailRefresh(){
          this.$refs.scroll.scroll.refresh();
          this.getThemeTopY();
          console.log('===========');
      },
      titleclick(index){
        this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],100);
      },
      contentscroll(position){
        //内容滚动显示正确的标题
        //1、获取y值
        const positionY = -position.y;
        //1、nav的切换方法1
        // if(this.currentIndex != 1 && positionY < this.themeTopYs[1]){
        //   this.currentIndex = 1;//为了防止多次做判断
        //   this.$refs.detailnav.currentIndex = 0;
        // }else if(this.currentIndex != 2 && positionY > this.themeTopYs[1] && positionY < this.themeTopYs[2]){
        //   this.currentIndex = 2;
        //   this.$refs.detailnav.currentIndex = 1;
        // }else if(this.currentIndex != 3 && positionY > this.themeTopYs[2] && positionY < this.themeTopYs[3]){
        //   this.currentIndex = 3;
        //   this.$refs.detailnav.currentIndex = 2;
        // }else if(this.currentIndex != 4 && positionY > this.themeTopYs[3]){
        //   this.currentIndex = 4;
        //   this.$refs.detailnav.currentIndex = 3;
        // }
        //2、nav的切换方法2
        const length=this.themeTopYs.length
        for(let i=0;i<length;i++){
          if(this.currentIndex !== i && (( i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) 
            || ( i === length - 1 && positionY >= this.themeTopYs[i]))){
              this.currentIndex=i;
              this.$refs.detailnav.currentIndex = this.currentIndex;
          }
        }
        //方法三3、再themeTopYs数组中多加上一个值Number.MAX_VALUE

        //判断backTop是否显示
        this.isShowBacktop = (-position.y) > 1000;
      },      
      backclick(){
        //返回顶部按钮
        //scroll组件的scroll属性
        this.$refs.scroll.scroll.scrollTo(0,0,500);//500毫秒内
      },
      addCart(){
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.newPrince
        product.iid = this.iid;
      }
  }
}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}
.content{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
}
</style>
