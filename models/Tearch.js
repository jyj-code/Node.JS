//继承父类User
var User=require('./User');
function Tearch(id,name,age){
	User.apply(this,[id,name,age]);
	this.teach=function(res)
	{
	res.write(this.name+	"老师讲课");	
	}
}
module.exports=Tearch;