class Form {
    constructor(){
        this.title = createElement('h1');
        this.title2 = createElement('h2');
        this.button = createButton('Play');
        //this.buttonimg = loadImage("images/playbutton.jpg");
        this.Gunbutton = createButton('Gun Shop');
        this.image = loadImage("images/Form_BG.jpg");
    }
    hide(){
        this.title.hide();
        this.button.hide();
        this.Gunbutton.hide();
    }
    display(){
        this.title.html("XOTIC RANGE");
        this.title2.html("Powered by ROG");
        this.title.position(400,160);
        this.title2.position(480,200);
        this.button.position(440,278);
        this.Gunbutton.position(445,311);
        image(this.image,0,0,1400,900);
        //image(this.buttonimg,this.button.position.x,this.button.position.y,50,50);
    }
}