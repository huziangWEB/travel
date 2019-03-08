/*
* @Author: Administrator
* @Date:   2019-02-28 18:36:05
* @Last Modified by:   huziangWEB
* @Last Modified time: 2019-02-28 21:08:28
*/
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const mockIndexData = require('./mock/index.json')
module.exports = {
	publicPath: './',
	devServer: {
		before(app){
	      app.get('/api/index.json',(req,res,next)=>{
	        res.json(mockIndexData);
	      })
	    }
	},
	// 配置路径别名
	chainWebpack: config => {
		config.resolve.alias
			.set('styles', resolve('src/assets/styles/'))
	}

}