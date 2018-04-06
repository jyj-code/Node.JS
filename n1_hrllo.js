var http=require('http');
var otherfun=require("./models/otherfun2.js");
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!="/favicon.ico")
	{
	//console.log('访问');
	//response.write('hello,word');
	//fun1(response);
	//第一种写法
	otherfun.fun2(response);
	otherfun.fun3(response);
	//第二种写法 用字符串调用对应Function
	otherfun['fun2'](response);
	otherfun['fun3'](response);
	
	//第三种种写法 用变量调用对应Function
	funName='fun4';
	otherfun[funName](response);

	
	response.end('---->end');
	}
	
}).listen(80); 
	console.log("hello,word 服务运行在80端口上");
function fun1(res)
{
	console.log("fun1");
	res.write("hello,wi是fun1");
}