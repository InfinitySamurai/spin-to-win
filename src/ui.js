function UI(){
    this.ui_elements = [];
    this.box = new VarTextBox(30,30,"Speed: ", spinner, "speed");
    this.ui_elements.push(this.box);


    for(var i = 0; i < this.ui_elements.length; i++){
        app.stage.addChild(this.ui_elements[i].textbox);
    }

    this.update = function(){
        for(var i = 0; i < this.ui_elements.length; i++){
            this.ui_elements[i].update();
        }
    };
    
}
