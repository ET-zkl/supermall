<template>
 <div class="wrapper">
   <ul>
     <li>nihinnnnnnnnnnn*1</li>
     <li>nihinnnnnnnnnnn*2</li>
     <li>nihinnnnnnnnnnn*3</li>
     <li>nihinnnnnnnnnnn*4</li>
     <li>nihinnnnnnnnnnn*5</li>
     <li>nihinnnnnnnnnnn*6</li>
     <li>nihinnnnnnnnnnn*7</li>
     <li>nihinnnnnnnnnnn*8</li>
     <li>nihinnnnnnnnnnn*9</li>
     <li>nihinnnnnnnnnnn*10</li>
     <li>nihinnnnnnnnnnn*11</li>
     <li>nihinnnnnnnnnnn*12</li>
     <li>nihinnnnnnnnnnn*13</li>
     <li>nihinnnnnnnnnnn*14</li>
     <li>nihinnnnnnnnnnn*15</li>
     <li>nihinnnnnnnnnnn*16</li>
     <li>nihinnnnnnnnnnn*17</li>
     <li>nihinnnnnnnnnnn*18</li>
     <li>nihinnnnnnnnnnn*19</li>
     <li>nihinnnnnnnnnnn*20</li>
     <li>nihinnnnnnnnnnn*21</li>
     <li>nihinnnnnnnnnnn*22</li>
     <li>nihinnnnnnnnnnn*23</li>
     <li>nihinnnnnnnnnnn*24</li>
     <li>nihinnnnnnnnnnn*25</li>
     <li>nihinnnnnnnnnnn*26</li>
     <li>nihinnnnnnnnnnn*27</li>
     <li>nihinnnnnnnnnnn*28</li>
     <li>nihinnnnnnnnnnn*29</li>
     <li>nihinnnnnnnnnnn*30</li>
     <li>nihinnnnnnnnnnn*31</li>
     <li>nihinnnnnnnnnnn*32</li>
     <li>nihinnnnnnnnnnn*33</li>
     <li>nihinnnnnnnnnnn*34</li>
     <li>nihinnnnnnnnnnn*35</li>
     <li>nihinnnnnnnnnnn*36</li>
     <li>nihinnnnnnnnnnn*37</li>
     <li>nihinnnnnnnnnnn*38</li>
     <li>nihinnnnnnnnnnn*39</li>
     <li>nihinnnnnnnnnnn*40</li>
     <li>nihinnnnnnnnnnn*41</li>
     <li>nihinnnnnnnnnnn*42</li>
     <li>nihinnnnnnnnnnn*43</li>
     <li>nihinnnnnnnnnnn*44</li>
     <li>nihinnnnnnnnnnn*45</li>
     <li>nihinnnnnnnnnnn*46</li>
     <li>nihinnnnnnnnnnn*47</li>
     <li>nihinnnnnnnnnnn*48</li>
     <li>nihinnnnnnnnnnn*49</li>
     <li>nihinnnnnnnnnnn*50</li>
     <li>nihinnnnnnnnnnn*51</li>
     <li>nihinnnnnnnnnnn*52</li>
     <li>nihinnnnnnnnnnn*53</li>
     <li>nihinnnnnnnnnnn*54</li>
     <li>nihinnnnnnnnnnn*55</li>
     <li>nihinnnnnnnnnnn*56</li>
     <li>nihinnnnnnnnnnn*57</li>
     <li>nihinnnnnnnnnnn*58</li>
     <li>nihinnnnnnnnnnn*59</li>
     <li>nihinnnnnnnnnnn*60</li>
     <li>nihinnnnnnnnnnn*61</li>
     <li>nihinnnnnnnnnnn*62</li>
     <li>nihinnnnnnnnnnn*63</li>
     <li>nihinnnnnnnnnnn*64</li>
     <li>nihinnnnnnnnnnn*65</li>
     <li>nihinnnnnnnnnnn*66</li>
     <li>nihinnnnnnnnnnn*67</li>
     <li>nihinnnnnnnnnnn*68</li>
     <li>nihinnnnnnnnnnn*69</li>
     <li>nihinnnnnnnnnnn*70</li>
     <li>nihinnnnnnnnnnn*71</li>
     <li>nihinnnnnnnnnnn*72</li>
     <li>nihinnnnnnnnnnn*73</li>
     <li>nihinnnnnnnnnnn*74</li>
     <li>nihinnnnnnnnnnn*75</li>
     <li>nihinnnnnnnnnnn*76</li>
     <li>nihinnnnnnnnnnn*77</li>
     <li>nihinnnnnnnnnnn*78</li>
     <li>nihinnnnnnnnnnn*79</li>
     <li>nihinnnnnnnnnnn*80</li>
     <li>nihinnnnnnnnnnn*81</li>
     <li>nihinnnnnnnnnnn*82</li>
     <li>nihinnnnnnnnnnn*83</li>
     <li>nihinnnnnnnnnnn*84</li>
     <li>nihinnnnnnnnnnn*85</li>
     <li>nihinnnnnnnnnnn*86</li>
     <li>nihinnnnnnnnnnn*87</li>
     <li>nihinnnnnnnnnnn*88</li>
     <li>nihinnnnnnnnnnn*89</li>
     <li>nihinnnnnnnnnnn*90</li>
     <li>nihinnnnnnnnnnn*91</li>
     <li>nihinnnnnnnnnnn*92</li>
     <li>nihinnnnnnnnnnn*93</li>
     <li>nihinnnnnnnnnnn*94</li>
     <li>nihinnnnnnnnnnn*95</li>
     <li>nihinnnnnnnnnnn*96</li>
     <li>nihinnnnnnnnnnn*97</li>
     <li>nihinnnnnnnnnnn*98</li>
     <li>nihinnnnnnnnnnn*99</li>
     <li>nihinnnnnnnnnnn*100</li>
   </ul>
  </div>
</template>

<script>

import BScroll from 'better-scroll';

export default {
  name: 'category',
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
    console.log(BScroll);
    this.scroll=new BScroll(document.querySelector('.wrapper'),{
      probeType: 3,
    })

    this.scroll.on('scroll',(postion)=>{
      console.log(postion);
    })
  }
}
</script>

<style scoped>
.wrapper{
  height: 200px;
  background-color: #ccc;
  /* overflow-y: scroll; */
  overflow: hidden;
}
</style>
