var OptPool=require('./models/OptPool');
var optpool=new OptPool();
var pool=optpool.getPool();
//从连接池获取一个连接
pool.getConnection(function(err,conn){
	var SQL='insert into user (uname,pwd) values(?,?)';
	var param=['连接池插入','isMypassword'];
	conn.query(SQL,param,function(err,rs){
		if(err){
			console,log("Insert err:",err.message);
			return;
		}
	console.log("insert sucess");
	
	});
	//查询
	var sql="select * from user";
	conn.query(sql,function(err,rs,fields){
	if(err){
		console.log('[query]-:'+err);
		return
	}
	for(var i=0;i<rs.length;i++)
	{
		console.log(rs[i].uid,"	",rs[i].uname,"	",rs[i].pwd)
	}
	});
	conn.release();//放回连接池
});

