function UI(){
    this.rotation_units = " rotations/second";
    this.ui_elements = [];
    this.ui_graphics = [];
    
    

    this.setup = function(){
        this.ui_elements.push(new VarTextBox(30,30, spinner, "speed", this.rotation_units, false));
        this.ui_elements.push(new VarTextBox(30,60, spinner, "decay", this.rotation_units, false));
        this.ui_elements.push(new VarTextBox(30,90, spinner, "max_speed", this.rotation_units, false));
        this.ui_elements.push(new VarTextBox(30,120, spinner, "click_strength", this.rotation_units, false));
        this.money_display();

        for(var i = 0; i < this.ui_elements.length; i++){
            app.stage.addChild(this.ui_elements[i].textbox);
        }
    };

    this.update = function(){
        for(var i = 0; i < this.ui_elements.length; i++){
            this.ui_elements[i].update();
        }
        for(var i = 0; i < this.ui_graphics.length; i++){
            this.ui_graphics[i].update();
        }
    };
    

    this.money_display = function(){
        var minx = app.renderer.width / 2 - spinner.sprite.width;
        var miny = app.renderer.height * 5/6;

        this.ui_elements.push(new VarTextBox(minx, miny, stats, "money", " $", true));

    };

    this.setup();

}
