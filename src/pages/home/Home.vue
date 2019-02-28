<template>
  <div>
	<HomeHeader></HomeHeader>
	<HomeSwiper></HomeSwiper>
	<HomeIcons></HomeIcons>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Header'
import HomeSwiper from '@/components/Swiper'
import HomeIcons from '@/components/Icons'
export default {
	name: 'Home',
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons
	}
}
</script>
