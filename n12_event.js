var http=require('http');
var UserBean=require('./models/Events');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!="/favicon.ico")
	{
	 user = new UserBean();
		user.eventEmit.once('zhuceSuc',function(uname,pwd){
			response.write("注册成功");
			console.log('传来Uname:'+uname);
			console.log('传来pwd:'+pwd);
			user.login(request,response);
			response.end('');
		});//注册监听
		user.zhuce(request,response);
	}
	
}).listen(80); 
console.log("Server runting at http:localhost:80/");
