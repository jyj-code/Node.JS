//使用前需要安装MySql支持 使用此命令：npm install mysql 安装连接池命令：npm install -g node-mysql
//create database test 创建test数据库
//创建表
/*
create table user(
uid int not null primary key auto_increment,
uname varchar(100) not null,
pwd varchar(100) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

*/

//No.jS连接池

var mysql=require('mysql');
function OptPool(){
	this.flag=true;//是否连接
	this.pool=mysql.createPool({
		host:'localhost',
		user:'root',
		password:'123456',
		database:'test',
		port:'3306',
	});
	this.getPool=function(){
		if(this.flag)
		{
			//监听connection事件
			this.pool.on('connection',function(connection)
			{
				connection.query('SET SESSION  auto_increment_increme')
				this.flag=false;
			})
		}
		return this.pool;
	}
};
module.exports=OptPool;