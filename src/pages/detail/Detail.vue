<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div style="height: 50rem"></div>
	</div>	
</template>
<script>
	import DetailBanner from '@/components/detail/Banner'
	import DetailHeader from '@/components/detail/Header'
	export default {
		name: 'Detail',
		components: {
			DetailBanner,
			DetailHeader
		}
	}
</script>

<style lang="stylus" scoped>

</style>