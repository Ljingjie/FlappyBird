function Beijing(){
	this.x = 0;
	this.y = 0;
	arr.push(this);
}
Beijing.prototype.update = function(){
	this.x -= 2;
	if(this.x < -288){
		this.x = 0;
	}
}
Beijing.prototype.render = function(){
	ctx.drawImage(R.bg_day, 0, 0, 288, 512, this.x, this.y, 288, 512);
	ctx.drawImage(R.bg_day, 0, 0, 288, 512, this.x+288, this.y, 288, 512);
	ctx.drawImage(R.bg_day, 0, 0, 288, 512, this.x+288*2, this.y, 288, 512);
	ctx.drawImage(R.bg_day, 0, 0, 288, 512, this.x+288*3, this.y, 288, 512);
	ctx.drawImage(R.land, 0, 0, 336, 112, this.x, 400, 336, 112);
	ctx.drawImage(R.land, 0, 0, 336, 112, this.x+336, 400, 336, 112);
	ctx.drawImage(R.land, 0, 0, 336, 112, this.x+336*2, 400, 336, 112);
	ctx.drawImage(R.land, 0, 0, 336, 112, this.x+336*3, 400, 336, 112);
}