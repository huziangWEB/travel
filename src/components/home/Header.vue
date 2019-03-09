<template>
  <div class="header">
	<div class="header-left">
		<span class="iconfont">&#xe624;</span>
	</div>	
	<div class="header-input">
		<span class="iconfont">&#xe632;</span>
		请输入关键字
	</div>
	<router-link to="/city">
		<div class="header-right">
			{{this.$store.state.city}}
			<span class="iconfont">&#xe6aa;</span>
		</div>
	</router-link>
  </div>
</template>

<script>
export default {
	name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		display: flex
		height: $headerHeight
		line-height: $headerHeight
		background: $bgColor
		color: #fff
		.header-left
			width: .64rem
			float: left
			.iconfont
				text-align: center
				font-size: .4rem
		.header-input
			flex: 1
			height: .64rem
			line-height: .64rem
			margin-top: .12rem
			margin-left: .2rem
			padding-left: .2rem
			background: #fff
			border-radius: 5px
			color: #ccc
		.header-right
			min-width: 1.04rem
			padding: 0 .1rem
			float: right
			text-align: center
			color: #fff
			.iconfont
				margin-left: -.04rem
				font-size: .24rem
	
</style>