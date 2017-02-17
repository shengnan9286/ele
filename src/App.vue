<template>
  <div id="app">
  	<header>
  		<div class="">
  			
  		</div>
  		<p><span>公告</span></p>
  	</header>
    <!--所有路由中的页面都会在这里渲染-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
	text-decoration: none;
}
li,ul{
	list-style: none;
}
</style>
