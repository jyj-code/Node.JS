var optfile=require('./outfile');
var url=require("url");//Get请求时候需要
var querystring=require('querystring');//post需要
function getRecall(req,res){
	res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	function recall(data){
		res.write(data);
		res.end('');
	}
	return recall;
}
module.exports={
	login:function(req,res){
	//Get方式接收参数
	/*
	var rdata=url.parse(req.url,true).query;
		console.log(rdata);
		if(rdata['email']!=undefined)
		{
			console.log(rdata['emall'])
			console.log(rdata['pwd'])
		}
	*/
	var post='';
	req.on('data',function(chunk){
		post+=chunk
	});
	req.on('end',function(){
		post=querystring.parse(post);
		//console.log('Post收到参数：'+post['email']+'\n');
		//console.log('Post收到参数：'+post['pwd']+'\n');
		arr=['email','pwd'];
		function recall(data){
			dataStr=data.toString();
			for(var i=0;i<arr.length;i++)
			{
				re=new RegExp('{'+arr[i]+'}','g');//正则表达式匹配替换
				dataStr=dataStr.replace(re,post[arr[i]]);
			}
			res.write(dataStr);
			res.end('');
		}
		var pathname="./view/login.html";
		optfile.readfile(pathname,recall);
	});
		/*
		recall=getRecall(req,res);
		var pathname="./view/login.html";
		optfile.readfile(pathname,recall);	
		*/
	},
	zhuce:function(req,res){
		recall=getRecall(req,res);
		optfile.readfile('./view/zhuce.html',recall);	
	},
	writefile:function(req,res)
	{
		function recall(data){
			res.write(data);
			res.end('');
		}
		var path="./view/one.txt";
		var data="我写着玩的单位单位单位";
		optfile.writefile(path,data,recall);
	},
	showimg:function(req,res){
		res.writeHead(200,{'Content-Type':'image/jpeg'});
		optfile.readImg('./view/1.png',res);
	}

	
}