<template>
	<div class="comment">
		<div class="score">
			<div>sss</div>
			<div></div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'comment',
  data() {
  	return {
  	 ratings: []
  	}
  },
  created() {
  	this.$http.get('/api/rating').then(function(response){
		response = response.body
		if (response.errno === 0) {
			this.ratings = response.data;
 			console.log(this.ratings)
      }
  	})
  }
}
</script>
<style lang="scss" scoped>
@import url("../scss/comment.scss");
</style>

