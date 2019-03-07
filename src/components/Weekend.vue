<template>
	<div>
		<div class="title">周末去哪</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" :key="item.id" :alt="item.title">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
				
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'HomeWeekend',
		data () {
			return {
				recommendList: [{
					id: '0001',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg',
					title: '郑州打卡',
					desc: '日月轮回，孕育出新的美丽'
				},{
					id: '0002',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1811/d2/017059dd59b0ee.jpg_r_640x214_497664a4.jpg',
					title: '城中碧玉万仙山',
					desc: '清幽山乡，人间仙境，世外桃源，雄壮而苍茫的红崖绝壁，妙曼而秀雅的山乡风韵，太行风光的典型代表'
				},{
					id: '0003',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ac/4c5317165807.jpg_r_640x214_f7431b62.jpg',
					title: '发现周末好玩',
					desc: '周末，想去哪儿就去哪儿'
				},{
					id: '0004',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1811/2c/e5e2b086fc0c60.jpg_r_640x214_811a2da7.jpg',
					title: '石刻艺术宝库',
					desc: '这里是中国石刻艺术宝库，石窟的规模大、艺术精湛，石刻艺术奇葩，是石刻艺术的典范之作。'
				}]
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		line-height: .8rem
		background: #eee
		text-indent: .2rem
		margin-top: .2rem
	.item-img-wrapper
		overflow: hidden
		height: 0
		padding-bottom: 33.9%
		.item-img
			width: 100%
	.item-info
		padding: .2rem
		.item-title
			line-height: .54rem
			font-size: .32rem
			ellipsis()
		.item-desc
			line-height: .4rem
			color: #666
			ellipsis() 
</style>