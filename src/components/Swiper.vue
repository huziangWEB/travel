<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item of swiperList">
				<img class="swiper-img" :src="item.imgUrl" :key="item.id">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	export default {
		name: 'HomeSwiper',
		data () {
			return {
				swiperOption: {
					el: '.swiper-pagination',
					loop: true
				},
				swiperList: [
					{
						id: '0001',
						imgUrl: '//source.qunarzz.com/site/images/wns/20190228_qunar_dujia_homepage_2.jpg'
					},
					{
						id: '0001',
						imgUrl: '//source.qunarzz.com/site/images/wns/20190228_dujia_homepage_top_banner_4.jpg'
					}
				]
			}
		}
	}
</script>
<style lang="stylus">
	.wrapper >>> .swiper-pagination-bullet-active
			background: #fff !important
	.wrapper
		overflow: hidden
		width: 100%
		height: 0
		padding-bottom: 25.73%
		background: #eee
		.swiper-img
			width: 100%
</style>