function ProgressBox(x, y, width, height, object, variable, max_variable){
    this.box_graphics = new PIXI.Graphics();
    this.bar_graphics = new PIXI.Graphics();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.object = object;
    this.variable = variable;
    this.max_variable = max_variable;

    this.box_graphics.lineStyle(2, 0xF0F000, 1);
    this.box_graphics.beginFill(0xFFFF53, 1);
    this.box_graphics.drawRect(this.x, this.y, this.width, this.height);
    this.box_graphics.endFill();

    this.update = function(){
        this.bar_graphics.clear()
        var percentage_filled = this.object[this.variable]/this.object[this.max_variable];
        this.bar_graphics.lineStyle(2, 0xF0F000, 1);
        this.bar_graphics.beginFill(0x659500, 1);
        this.bar_graphics.drawRect(this.x, this.y, this.width * percentage_filled, this.height);
        this.bar_graphics.endFill();
    }

}
