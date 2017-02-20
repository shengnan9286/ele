<template>
  <div id="app">
  	<header>
  		<div class="content_wrap">
  			<div><img src="./assets/bg.jpg"/></div>
  			<div>
  				<p><span>品牌</span>粥品香坊（回龙观）</p>
  				<p>蜂鸟专送/38分钟送达</p>
  				<p><img src="./assets/decrease_1@2x.png"/>在线支付满28减5<span>5个></span></p>
  			</div>
  		</div>
  		<p class="text"><span>公告</span>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
  		<div class="content_bg"></div>
  	</header>
  	<nav>
  		  <a href="#/goods">商品</a>
  	    <a href="#/comment">评论</a>
  	    <a href="#/seller">商家</a>
  	</nav>
    <!--所有路由中的页面都会在这里渲染-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  
}
</script>

<style lang="scss">
*{
	padding: 0;
	margin: 0;
}
html{
	font-size: 100px;
}
body{
	font-size: 0.1rem;
}
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
@import "scss/common.scss";
</style>
