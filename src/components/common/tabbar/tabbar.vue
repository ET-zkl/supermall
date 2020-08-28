<template>
  <div>
     <div class="tab-bar">
    <slot> </slot>
    </div>
  </div>
 
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style scoped>
.tab-bar {
  display: flex;
  background-color: #f6f6f6;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 3px rgba(0,0,0,.2)
}
</style>
