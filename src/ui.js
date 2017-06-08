function UI(){
    this.ui_elements = [];
    this.ui_elements.push(new VarTextBox(30,30, spinner, "speed"));
    this.ui_elements.push(new VarTextBox(30,100, spinner, "decay"));
    this.ui_elements.push(new VarTextBox(30,200, spinner, "max_speed"));

    
    for(var i = 0; i < this.ui_elements.length; i++){
        app.stage.addChild(this.ui_elements[i].textbox);
    }

    this.update = function(){
        for(var i = 0; i < this.ui_elements.length; i++){
            this.ui_elements[i].update();
        }
    };
    
}
