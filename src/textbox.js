function VarTextBox(x, y, object, variable, units, prefix=false){
    
    this.textbox = new PIXI.Text("");
    this.textbox.x = x;
    this.textbox.y = y;
    this.units = units;
    this.object = object;
    this.variable = variable;


    this.update = function(){
        var value = this.object[this.variable].toFixed(2);
        if(prefix){
            this.textbox.text = this.variable + ": " + this.units + value;
        }
        else{
            this.textbox.text = this.variable + ": " + value + this.units;
        }
    };
}
