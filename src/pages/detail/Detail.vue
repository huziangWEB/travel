<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<detail-list :list="list"></detail-list>
	</div>	
</template>
<script>
	import DetailBanner from '@/components/detail/Banner'
	import DetailHeader from '@/components/detail/Header'
	import DetailList from '@/components/detail/List'
	export default {
		name: 'Detail',
		components: {
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data () {
			return {
				list: [{
					title: '成人票',
					children: [{
						title: '成人三馆联票',
						children: [{
							title: '成人三馆联票-连锁店'
						}]
					},{
						title: '成人五馆联票'
					}]
				},{
					title: '学生票'
				},{
					title: '儿童票'
				},{
					title: '特惠票'
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>

</style>