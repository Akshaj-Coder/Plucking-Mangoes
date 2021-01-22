class tree {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height);
        this.image = loadImage("tree.png");
    }

    display() {
        var pos = this.body.position;

        image(this.image,0,0,this.width,this.height);
        imageMode(CENTER);
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        pop();
       
    }
}