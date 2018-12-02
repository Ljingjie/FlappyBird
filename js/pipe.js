function Pipe(){
	this.x = 850;
	this.y = 0;
	this.up_length = parseInt(Math.random()*200);
	this.feng = 150;
	this.down_length = 400 - this.up_length - this.feng;
	this.state = [0, 1][parseInt(Math.random()*2)];
	pipeArr.push(this);
}
Pipe.prototype.update = function(){
	this.x -= 2;
}
Pipe.prototype.render = function(){
	if(this.state == 0){
		ctx.drawImage(R.pipe_chongxia, 0, 320-this.up_length, 52, this.up_length, this.x, this.y, 52, this.up_length);
		ctx.drawImage(R.pipe_chongshang, 0, 0, 52, this.down_length, this.x, this.up_length+this.feng, 52, this.down_length);
	}else if(this.state == 1){
		ctx.drawImage(R.pipe2_up, 0, 320-this.up_length, 52, this.up_length, this.x, this.y, 52, this.up_length);
		ctx.drawImage(R.pipe2_down, 0, 0, 52, this.down_length, this.x, this.up_length+this.feng, 52, this.down_length);
	}
}