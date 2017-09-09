// 配置信息
require.config({
	//时间戳
	urlArgs:'v='+ Date.now(),

	//配置
	paths:{
		jquery:'../lib/jquery-3.1.1',
		gVerify:'../lib/gVerify',
		index_head:'./index_head',
		magnifier:'./Magnifier',
	},

	 shim: {
         //依赖
         index_head: ["jquery"],
         magnifier:["jquery"]
   
    }


});