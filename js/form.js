class Form {
    constructor () {

        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting= createElement("h2");
        
    }
    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display() {
        var title= createElement("h2")
        fill("blue");
        title.html("Welcome To The Car Racing Game!")
        title.position(130,100);
       
        this.input.position(200,200);
        this.button.position(150,150);

        this.button.mousePressed(()=>{
                this.input.hide();
                this.button.hide();

                player.name = this.input.value();
                playerCount+=1;
                player.index = playerCount;

                player.update();
                player.updateCount(playerCount);

                this.greeting.html("Welcome"+ player.name);
                this.greeting.position(300,300);
            }
            
        ) 

        
    }
}
