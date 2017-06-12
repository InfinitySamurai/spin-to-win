function UI(){
    this.rotation_units = " rotations/second";
    this.ui_elements = [];
    this.ui_graphics = [];
    this.ui_container = new PIXI.Container();
    this.spinner_stats_container = new PIXI.Container();
    
    

    this.setup = function(){
        this.ui_elements.push(new VarTextBox(30,150, spinner, "money_per_spin", " $/rotation"));
        this.moneyDisplay();
        this.spinnerStats();


    };

    this.spinnerStats = function(){
        var element_count_start = this.ui_elements.length;
        this.ui_elements.push(new VarTextBox(30,30, spinner, "speed", this.rotation_units));
        this.ui_elements.push(new VarTextBox(30,60, spinner, "decay", this.rotation_units));
        this.ui_elements.push(new VarTextBox(30,90, spinner, "max_speed", this.rotation_units));
        this.ui_elements.push(new VarTextBox(30,120, spinner, "click_strength", this.rotation_units));

        for(var i = element_count_start; i < this.ui_elements.length; i++){
            this.spinner_stats_container.addChild(this.ui_elements[i].textbox);
        }

        app.stage.addChild(this.spinner_stats_container);
    };

    this.update = function(){
        for(var i = 0; i < this.ui_elements.length; i++){
            this.ui_elements[i].update();
        }
        for(var i = 0; i < this.ui_graphics.length; i++){
            this.ui_graphics[i].update();
        }
    };
    

    this.moneyDisplay = function(){
        var minx = app.renderer.width / 2 - spinner.sprite.width;
        var miny = app.renderer.height * 5/6;
        var box = new VarTextBox(minx, miny, stats, "money", " $", true);
        this.ui_elements.push(box);

        app.stage.addChild(box.textbox);

    };

    this.setup();

}
