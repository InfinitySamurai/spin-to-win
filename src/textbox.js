function VarTextBox(x, y, object, variable, units, prefix=false, target_container){
    
    this.textbox = new PIXI.Text("");
    this.textbox.x = x;
    this.textbox.y = y;
    this.units = units;
    this.object = object;
    this.variable = variable;
    
    target_container.addChild(this.textbox);

    this.update = function(){
        var value = this.object[this.variable].toFixed(2);
        if(prefix){
            this.textbox.text = this.variable + ": " + this.units + value;
        }
        else{
            this.textbox.text = this.variable + ": " + value + this.units;
        }
    };

    // update straight away so that the text is initialised
    this.update();
}
