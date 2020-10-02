class Bob {

	constructor(x,y,r) {

		var options = {
			isStatic:false,
			restitution:1.0,
			friction:0.3,
			density:0.3

        }
        
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

    }
    
	display() {
			
		var bobpos=this.body.position;		

        push();
        
		translate(bobpos.x, bobpos.y);
		rectMode(CENTER)
        strokeWeight(4);
        stroke("blue");
		fill(255,0,255)
        ellipse(0, 0, this.r, this.r);
        
		pop();
			
	}

}
