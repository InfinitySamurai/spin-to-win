function VarTextBox(x, y, text, object, variable){
    
    this.textbox = new PIXI.Text(text);
    this.base_text = text;
    this.x = x;
    this.y = y;
    this.object = object;
    this.variable = variable;


    this.update = function(){
        this.textbox.text = this.base_text + this.object[this.variable];
    };
}
