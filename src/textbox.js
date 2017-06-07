function VarTextBox(x, y, text, variable){
    
    this.textbox = new PIXI.Text(text);
    this.base_text = text;
    this.x = x;
    this.y = y;
    this.variable = variable;

    this.update = function(){
        this.textbox.text = this.base_text + spinner.speed;
    };
}
