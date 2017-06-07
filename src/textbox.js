function TextBox(x, y, text){

    this.pixitext = new PIXI.Text(text)
    this.pixitext.x = x
    this.pixitext.y = y

}

function TextBoxVar(x, y, text, variable){
    this.textbox = TextBox(x, y, text);
    this.variable = variable;
}
