var http=require('http');
//var User=require("./models/User");
var Tearch=require("./models/Tearch");
http.createServer(function(request,response){
	response.writeHead(200,{'content-Type':'text/html;charset=utf-8'});
	if(request.url!=="/favicon.ico")
	{
		/*
		 user=new User();
		 user.id=1;
		 user.name="张三";
		 user.age=20;
		*/
		//user=new User('2','张思',21);
		 // user.enter();
		  
		  //同时继承父类
		tearch=new Tearch('2','张思',21);
		  tearch.enter();
		  tearch.teach(response);
		response.end('');	
	}
}).listen(80);
console.log("Server runting at http:localhost:80/");