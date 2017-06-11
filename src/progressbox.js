function ProgressBox(x, y, width, height, object, variable, max_variable, show_values, show_percentage){
    this.box_graphics = new PIXI.Graphics();
    this.bar_graphics = new PIXI.Graphics();
    this.values = new PIXI.Text("");
    this.values.x = x;
    this.values.y = y;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.object = object;
    this.variable = variable;
    this.max_variable = max_variable;
    this.show_values = show_values;
    this.show_percentage = show_percentage;

    this.box_graphics.lineStyle(2, 0xF0F000, 1);
    this.box_graphics.beginFill(0xFFFF53, 1);
    this.box_graphics.drawRect(this.x, this.y, this.width, this.height);
    this.box_graphics.endFill();


    this.update_bar = function(value, max){
        this.bar_graphics.clear();
        var percentage_filled = value/max;
        this.bar_graphics.lineStyle(2, 0xF0F000, 1);
        this.bar_graphics.beginFill(0x659500, 1);
        this.bar_graphics.drawRect(this.x, this.y, this.width * percentage_filled, this.height);
        this.bar_graphics.endFill();
    };

    this.update_text = function(value, max){
        if(this.show_values){
            if(this.show_percentage){
                var percentage_filled = value/max;
                this.values.text = percentage_filled.toFixed(2) + "%";
            }
            else{
                this.values.text = value.toFixed(2) + "/" + max;
            }
        }
    };

    this.update = function(){
        var current_val = object[variable];
        var current_max = object[max_variable];
        this.update_bar(current_val, current_max);
        this.update_text(current_val, current_max);
    };

}
