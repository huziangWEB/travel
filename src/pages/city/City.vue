<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list></city-list>
		<city-alphabet></city-alphabet>
	</div>	
</template>
<script>
	import CityHeader from '@/components/city/Header'
	import CitySearch from '@/components/city/Search'
	import CityList from '@/components/city/List'
	import CityAlphabet from '@/components/city/Alphabet'
	export default {
		name: 'City',
		components: {
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		}
	}
</script>
<style lang="stylus" scoped>
	
</style>