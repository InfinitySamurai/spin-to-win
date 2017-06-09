function UI(){
    this.rotation_units = " rotations/second";
    this.ui_elements = [];
    this.ui_graphics = [];
    this.ui_elements.push(new VarTextBox(30,30, spinner, "speed", this.rotation_units));
    this.ui_elements.push(new VarTextBox(30,60, spinner, "decay", this.rotation_units));
    this.ui_elements.push(new VarTextBox(30,90, spinner, "max_speed", this.rotation_units));
    this.ui_elements.push(new VarTextBox(30,120, spinner, "click_strength", this.rotation_units));
    
    for(var i = 0; i < this.ui_elements.length; i++){
        app.stage.addChild(this.ui_elements[i].textbox);
    }

    this.update = function(){
        for(var i = 0; i < this.ui_elements.length; i++){
            this.ui_elements[i].update();
        }
        for(var i = 0; i < this.ui_graphics.length; i++){
            this.ui_graphics[i].update();
        }
    };
    
}
