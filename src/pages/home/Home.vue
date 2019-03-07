<template>
  <div>
	<HomeHeader></HomeHeader>
	<HomeSwiper></HomeSwiper>
	<HomeIcons></HomeIcons>
	<HomeRecommend></HomeRecommend>
	<HomeWeekend></HomeWeekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Header'
import HomeSwiper from '@/components/Swiper'
import HomeIcons from '@/components/Icons'
import HomeRecommend from '@/components/Recommend'
import HomeWeekend from '@/components/Weekend'
export default {
	name: 'Home',
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	}
}
</script>
