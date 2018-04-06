var http=require('http');
var url=require("url");
var router=require('./models/rout');
//var optfile=require('./models/outfile');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!="/favicon.ico"){
	/*
		//optfile.readfileSync('./view/loginfo.html');	
		function recall(data){
			response.write(data.toString());
			response.end('---->end');
		}
		optfile.readfile('./view/loginfo.html',recall);	
		console.log('主文件执行完毕');
	*/
		var pathname=url.parse(request.url).pathname;
		console.log(pathname);
		pathname=pathname.replace(/\//,'');//Url里面的替换掉/
		console.log(pathname);
		router[pathname](request,response);
	}
	
}).listen(80); 
console.log("Server runting at http:localhost:80/");
