class Tile {
	constructor(x,y,side,index,next){
		this.x = x;
		this.y = y;
		this.side = side;
		this.next = next;
		this.color = rgb(Math.round(random(150.255)), Math.round(random(120,255)), Math.round(random(200,255)));
	}

	show(){
		fill(this.color);
		rect(this.x, this.y, this.side, this.side);
	}
}