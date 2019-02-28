<template>
  <div>
	<HomeHeader></HomeHeader>
	<HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Header'
import HomeSwiper from '@/components/Swiper'
export default {
	name: 'Home',
	components: {
		HomeHeader,
		HomeSwiper
	}
}
</script>
