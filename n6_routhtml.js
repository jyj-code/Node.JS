var http=require('http');
var url=require("url");
var router=require('./models/rout');
http.createServer(function(request,response){
	if(request.url!="/favicon.ico")
	{
	var pathname=url.parse(request.url).pathname;
	pathname=pathname.replace(/\//,'');//Url里面的替换掉/
	console.log(pathname);
		try{
			router[pathname](request,response);
		}catch(err){
			console.log("出现异常错误啦："+err);
			response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
			response.write(err.toString());
			response.end('');
		}
	}
	
}).listen(80); 
console.log("Server runting at http:localhost:80/");
