function VarTextBox(x, y, object, variable){
    
    this.textbox = new PIXI.Text("");
    this.textbox.x = x;
    this.textbox.y = y;
    this.object = object;
    this.variable = variable;


    this.update = function(){
        this.textbox.text = this.variable + ": " + this.object[this.variable].toFixed(2);
    };
}
