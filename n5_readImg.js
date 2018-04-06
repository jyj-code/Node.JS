var http=require('http');
var optfile=require('./models/outfile');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'image/jpeg'});
	if(request.url!="/favicon.ico"){
		optfile.readImg('./view/1.png',response);	
	}
	
}).listen(80); 
console.log("Server runting at http:localhost:80/");
