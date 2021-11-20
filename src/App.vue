<template>
  <div class="container">
    <SideBar class="sidebar"/>
    <router-view class="conteudo"></router-view>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'


export default {
  name: 'App',
  components: {
    SideBar,
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
</style>
<style scoped>
.container{
  display: flex;
}
.sidebar{
  left: 0;
}
.container--corpo{
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #dcdcdc;
  
}
</style>