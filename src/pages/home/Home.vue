<template>
  <div>
	<home-header></home-header>
	<home-swiper :list="swiperList"></home-swiper>
	<home-icons :list="iconList"></home-icons>
	<home-recommend :list="recommendList"></home-recommend>
	<home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/Header'
import HomeSwiper from '@/components/home/Swiper'
import HomeIcons from '@/components/home/Icons'
import HomeRecommend from '@/components/home/Recommend'
import HomeWeekend from '@/components/home/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
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
			lastCity: '',
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList: []
		}	
	},
	computed: {
		...mapState(['city'])
	},
	methods: {
		getHomeInfo: function () {
			axios.get('/api/index.json?city=' + this.city)
				.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc: function (res) {
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.swiperList = data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			}
		}
	},
	mounted: function () {
		this.lastCity = this.city
		this.getHomeInfo()
	},
	activated () {
		if (this.lastCity !== this.city) {
			this.lastCity = this.city
			this.getHomeInfo()
		}
	}
}
</script>
