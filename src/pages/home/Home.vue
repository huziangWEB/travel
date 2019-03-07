<template>
  <div>
	<HomeHeader :city="city"></HomeHeader>
	<HomeSwiper :list="swiperList"></HomeSwiper>
	<HomeIcons :list="iconList"></HomeIcons>
	<HomeRecommend :list="recommendList"></HomeRecommend>
	<HomeWeekend :list="weekendList"></HomeWeekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Header'
import HomeSwiper from '@/components/Swiper'
import HomeIcons from '@/components/Icons'
import HomeRecommend from '@/components/Recommend'
import HomeWeekend from '@/components/Weekend'
import axios from 'axios'
export default {
	name: 'Home',
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	},
	data: function () {
		return{
			city: '',
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList: []
		}	
	},
	methods: {
		getHomeInfo: function () {
			axios.get('/api/index.json')
				.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc: function (res) {
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.city = data.city
				this.swiperList = data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			}
		}
	},
	mounted: function () {
		this.getHomeInfo()
	}
}
</script>
