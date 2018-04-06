var http=require('http');
var url=require("url");
var router=require('./models/rout');
http.createServer(function(request,response){
	if(request.url!="/favicon.ico")
	{
		var pathname=url.parse(request.url).pathname;
		console.log(pathname);
		pathname=pathname.replace(/\//,'');//Url里面的替换掉/
		console.log(pathname);
		router[pathname](request,response);
		response.end('---->end');
	}
	
}).listen(80); 
console.log("Server runting at http:localhost:80/");
