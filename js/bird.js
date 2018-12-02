function Bird(){
	this.x = 400;
	this.y = 300;
	this.step= 0;
	this.dy = 0;
	this.rotate = 0;
	this.state = "down";

	arr.push(this);
}
Bird.prototype.update = function(){
	this.step++;
	if(this.step > 2){
		this.step = 0;
	}
	this.dy += 0.1;
	this.y += this.dy;
	if(this.state = "down"){
		this.rotate += 0.008;
		if(this.rotate > 90/53.7){
			this.rotate = 90/53.7;
		}
	}else if(this.state = "up"){
		this.f++;
		if(f > 4){
			this.state = "down";
		}
	}
	//包裹盒
	this.BBx1 = this.x - 10;
	this.BBx2 = this.x + 10;
	this.BBy1 = this.y - 12;
	this.BBy2 = this.y + 12;
}
Bird.prototype.render = function(){
	ctx.save();
	ctx.translate(this.x, this.y);
	ctx.rotate(this.rotate);
	if(this.step == 0){
		ctx.drawImage(R.bird0_0, -24, -24);
	}else if(this.step == 1){
		ctx.drawImage(R.bird0_1, -24, -24);
	}else if(this.step == 2){
		ctx.drawImage(R.bird0_2, -24, -24);
	}
	ctx.restore();
}
Bird.prototype.fly = function(){
	this.state = "up";
	this.dy = -5;
	this.rotate = -0.08;
	this.f = 0;
}