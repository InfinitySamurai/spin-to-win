function UI(){
    this.rotation_units = " rotations/second";
    this.ui_elements = [];
    this.ui_upgrades = [];
    this.ui_graphics = [];
    this.ui_container = new PIXI.Container();
    this.spinner_stats_container = new PIXI.Container();


    // add all the containers to the right places
    this.ui_container.addChild(this.spinner_stats_container);
    app.stage.addChild(this.ui_container);
    
    

    this.setup = function(){
        this.moneyDisplay();
        this.spinnerStats();


    };

    this.spinnerStats = function(){

        var yseperation = 30;
        var starty = 30;
        var baseunit = this.rotation_units;
        var stats = ["speed", "decay", "max_speed", "click_strength", "money_per_spin"];
        var units = [baseunit, baseunit, baseunit, baseunit, " $/rotation"];

        for(var i = 0; i < stats.length; i++){
            var posy = starty + i * yseperation;
            var cont = this.spinner_stats_container;

            var display = new VarTextBox(30, posy, spinner, stats[i], units[i], false, cont);
            var upgrade = new Upgrade(display.textbox, spinner, stats[i], 2, upgrade_texture, cont);
            this.ui_elements.push(display);
            this.ui_upgrades.push(upgrade);
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
    

    this.moneyDisplay = function(){
        var minx = app.renderer.width / 2 - spinner.sprite.width;
        var miny = app.renderer.height * 5/6;
        var box = new VarTextBox(minx, miny, stats, "money", " $", true, this.ui_container);
        this.ui_elements.push(box);
    };

    this.setup();

}
