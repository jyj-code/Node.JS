//使用前需要安装MySql支持 使用此命令：npm install mysql
//create database test 创建test数据库
//创建表
/*
create table user(
uid int not null primary key auto_increment,
uname varchar(100) not null,
pwd varchar(100) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

*/

//No.jS直连MySQL数据

var mysql=require('mysql');
var connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'test',
	port:'3306',
});
//创建一个connection
connection.connect(function(err){
	if(err){
		console.log('[query]-:'+err);
		return;
	}
	console.log('[conection connect] succeedfuly');
});
//执行数据库操作 插入数据到MySQL数据库
var SQL='insert into user (uname,pwd) values(?,?)';
var parame=['姜先生','isMypassword'];
connection.query(SQL,parame,function(err,rs){
	if(err){
		console,log("Insert err:",err.message);
		return;
	}
	console.log("insert sucess");
})
//执行sql查询
var sql="select * from user";
connection.query(sql,function(err,rs,fields){
	if(err){
		console.log('[query]-:'+err);
		return
	}
	for(var i=0;i<rs.length;i++)
	{
		console.log(rs[i].uid,"	",rs[i].uname,"	",rs[i].pwd)
	}
		console.log(fields);
});
//带where条件执行sql查询
var sql="select * from user where uid=?"
connection.query(sql,[2],function(err,rs,fields){
	if(err){
		console.log('[query]-:'+err);
		return
	}
	for(var i=0;i<rs.length;i++)
	{
		console.log(rs[i].uid,"	",rs[i].uname,"	",rs[i].pwd)
	}
		console.log(fields);
});
//关闭连接
connection.end(function(err){
	if(err){
	console.log("关闭发生错误："+err.toString());
		return;
	}
	console.log('[conection end] succeedfuly');
})

