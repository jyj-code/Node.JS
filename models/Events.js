var events=require("events");
var http=require("http");
function UserBean(){
	this.eventEmit=new events.EventEmitter();
	this.zhuce=function(req,res){
		console.log("注册");
		req['uname']="我的名字";
		req["pwd"]="我的密码";
		this.eventEmit.emit('zhuceSuc','用户','密码');//抛出事件消息
	},this.login=function(req,res){
		console.log("登录");
		res.write("用户名："+req['uname']);
		res.write("密码：  "+req['pwd']);
		res.write("登录");
	}
}
module.exports = UserBean;     