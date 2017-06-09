function ProgressBox(x, y, width, height, object, variable, max_variable){
    this.graphics = new PIXI.Graphics();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.object = object;
    this.variable = variable;
    this.max_variable = max_variable;

    this.setup = function(){
        this.graphics.lineStyle(2, 0x000FF, 1);
        this.graphics.beginFill(0xFF700B, 1);
        this.graphics.drawRect(this.x, this.y, this.width, this.height);
        this.graphics.endFill();
    }

    this.update = function(){

    }

    this.setup();
}
