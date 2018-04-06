var net=require('net');
const PORT=80;
const HOST='127.0.0.1';
var tcpClinet=net.Socket();
tcpClinet.connect(PORT,HOST,function(){
	console.log('TCP 客户端连接成功');
	tcpClinet.write('山猫 山猫 我是 NOde.js TCP clinent\n');
});
tcpClinet.on('data',function(data){
	console.log('山猫山猫在吗？',data.toString());
})