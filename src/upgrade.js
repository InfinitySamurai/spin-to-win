function Upgrade(x, y, object, variable, initial_cost, texture){
    this.object = object;
    this.variable = variable;
    this.initial_cost = initial_cost;
    this.current_cost = initial_cost;
    this.sprite = new PIXI.Sprite.from(texture);
    this.sprite.x = x;
    this.sprite.y = y;
};
