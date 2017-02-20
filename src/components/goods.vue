<template>
	<div class="goods">
		<div class="menu">
			<ul>
				<li v-for="(item,index) in goods"><a href="">{{item.name}}</a></li>
			</ul>
		</div>
		<div class="goods_list">
			<div class="goods_item" v-for="(item,index) in goods">
				<h1 class="title" id="">{{item.name}}</h1>
				<ul>
					<li v-for="food in item.foods" class="food">
						<div><img :src="food.icon"/></div>
						<div>
							<p>{{food.name}}</p>
							<p>{{food.description}}</p>
							<p><span>月销{{food.sellCount}}</span><span>好评{{food.rating}}</span></p>
							<p>￥{{food.price}}</p>
						</div>
					</li>		
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'goods',
  data() {
  	return {
  		goods:[],
  	}
  },
  created() {
  	this.$http.get('/api/goods').then(function(response){
		response = response.body
		if (response.errno === 0) {
			this.goods = response.data;
 			//console.log(this.goods)
      }
  	})
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/goods'
</style>

