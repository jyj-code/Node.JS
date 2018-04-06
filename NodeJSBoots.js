var express=require('express');//安装指令是： npm install express --save
var app=express();
var request=require('request');//安装指令是：npm install request
var cheeio=require('cheerio');//安装指令是：npm install cheerio
app.get('/',function(req,res){
	request('http://www.gov.cn/premier/index.htm',function(error,response,body){
		if(!error&&response.statusCode==200){
			$=cheeio.load(body);
			//console.log(body);
			res.send(body);//抓取整个网页显示在本地页面上
			/*
			res.json({
				'classnum':$('.aside-cList li').length
			});
			*/
		}
	});
}).listen(80); 
//console.log("Server runting at http:localhost:80/");
