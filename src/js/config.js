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
         
         index_head: ["jquery"],
         magnifier:["jquery","index_head"],
   
    }


});