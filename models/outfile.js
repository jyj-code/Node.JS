var fs=require('fs');
module.exports={
//读文件 同步 异步
	readfileSync:function(path){
		var data=fs.readFileSync(path,'utf-8');
		console.log(data);
		console.log("同步方法执行完毕");
	},
	readfile:function(path,recall){
		fs.readFile(path,function(err,data){
		if(err){
			console.log(err);
		}else{
			console.log(data.toString());
			recall(data);
		}
	});
		console.log("异步方法执行完毕");
	},
	//读取图片文件 
	
	readImg:function(path,res){
		fs.readFile(path,'binary',function(err,filedata){
			if(err){
				console.log(err);
				return;
			}else{
				res.write(filedata,'binary');
				res.end();
			}
		})
	},
	
	
	//写文件 同步 异步
	writefile:function(path,data,recall){
		fs.writeFile(path,data,function(err){
			if(err){
			throw err;
			}
			console.log('It\'s Saved');
			recall("异步写文件成功")
		})
	},
	writefileSync:function(path,data){
		fs.writeFileSync(path,data)
		console.log("同步写文件完成");
	}
}
