var net=require('net');
const PORT=80;
const HOST='127.0.0.1';
var clientHandler=function(socket){
	console.log('someone connected');
	socket.on('data',function dataHandler(data){
		console.log(socket.remoteAddress,socket.remotePort,'end',data.toString());
		socket.write('我是山猫\n');
	});
	socket.on('close',function(){
		console.log(socket.remoteAddress,socket.remotePort,'Disconnected');
	})
};
var app=net.createServer(clientHandler);
app.listen(PORT,HOST);
console.log('tcp server runing on tcp://',HOST,':',PORT);