/*
function User()
{
	this.id;
	this.name;
	this.age;
	this.enter=function(){
		console.log(this.name+"	进入图书馆");
	}
}
*/
function User(id,name,age)
{
	this.id=id;
	this.name=name;
	this.age=age;
	this.enter=function(){
		console.log(this.id+"	"+this.name+"	"+this.age+"	进入图书馆");
	}
}
module.exports=User;