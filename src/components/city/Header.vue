<template>
	<div class="header">
		城市选择
		<router-link to="/">
			<div>
				<span class="iconfont">&#xe624;</span>
			</div>
		</router-link>
	</div>
</template>
<script>
	export default {
		name: 'CityHeader'
	}
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		position: relative
		overflow: hidden
		height: $headerHeight
		line-height: $headerHeight
		text-align: center
		color: #fff
		background: $bgColor
		font-size: .32rem
		.iconfont
			width: .65rem
			font-size: .4rem
			text-align: center
			position: absolute
			top: 0
			left: 0
			color: #fff
</style>