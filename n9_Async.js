//异步流程控制对象  使用前必须先安装，cmd命令进入当前文件夹，使用此命令安装npm install async -save-dev
var async=require('async');
function oneFun(){
	//setTimeout(function(){},1000);
	i=0;
	setInterval(function(){
	console.log("我是setInterval_oneFun："+new Date());
		i++;
		if(i==3)
		{
			clearInterval(this);
		}
	},1000);
	console.log("oneFun");
}
function twoFun(){
	j=0;
	setInterval(function(){
		console.log("我是setInterval_twoFun："+new Date());
		j++;
		if(j==30)
		{
			clearInterval(this);
		}
	},1000);
	console.log("twoFun");
}
//oneFun();
//twoFun();


function exec(){
//串行无关联（上个函数执行完成才执行下一个函数）
	/*
	async.series({
		one:function(done){
			k=0;
			setInterval(function(){
			console.log("异步串行无关联_oneFun："+new Date());
			k++;
			if(k==3)
			{
				clearInterval(this);
				done(null,'one完毕')
			}
			},1000);
		},
		two:function(done){
			m=0;
			setInterval(function(){
			console.log("异步串行无关联_twoFun："+new Date());
			m++;
			if(m==3)
			{
				clearInterval(this);
				done(null,'two完毕')
			}
			},1000);
		}
	},function(err,rs){
		console.log(err);
		console.log(rs);
	}
	)
	*/
	//并行无关联
	/*
	async.parallel({
		one:function(done){
			k2=0;
			setInterval(function(){
			console.log("异步并行无关联_oneFun："+new Date());
			k2++;
			if(k2==3)
			{
				clearInterval(this);
				done(null,'one完毕')
			}
			},1000);
		},
		two:function(done){
			m2=0;
			setInterval(function(){
			console.log("异步并行无关联_twoFun："+new Date());
			m2++;
			if(m2==3)
			{
				clearInterval(this);
				done(null,'two完毕')
			}
			},1000);
		}
	},function(err,rs){
		console.log(err);
		console.log(rs);
	}
	)
	*/
	//串行有关联
	async.waterfall(
	[
		function(done){
			k2=0;
			setInterval(function(){
			console.log("异步并行无关联_oneFun："+new Date());
			k2++;
			if(k2==3)
			{
				clearInterval(this);
				done(null,'one完毕')
			}
			},1000);
		},
		function(preValue,done){
			m2=0;
			setInterval(function(){
			console.log("异步并行无关联_twoFun："+preValue+"="+new Date());
			m2++;
			if(m2==3)
			{
				clearInterval(this);
				done(null,preValue+',two完毕')
			}
			},1000);
		}
	],function(err,rs){
		console.log(err);
		console.log(rs);
	}
	)
}
exec();
console.log("主进程执行完毕");