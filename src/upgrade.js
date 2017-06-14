function Upgrade(ui_element, object, variable, initial_cost, increment, texture, target_container){
    this.ui_element = ui_element;
    this.object = object;
    this.variable = variable;
    this.current_cost = initial_cost;
    this.increment = increment;

    this.cost_increment = 5;
    this.upgrade_increment = 0.2;

    this.sprite = PIXI.Sprite.from(texture);
    // all of these values need to be cleaned up and be based on screen size
    // instead of numbers pulled from nowhere
    this.sprite.anchor.set(0.5);
    this.sprite.height = 25;
    this.sprite.width = 25;
    this.sprite.x = ui_element.x + ui_element.width + 25;
    this.sprite.y = ui_element.y + 13; 

    this.sprite.interactive = true;

    target_container.addChild(this.sprite);

    this.onClick = function(){
        if(stats.removeMoney(this.current_cost)){
            this.current_cost += this.cost_increment;
            if(increment){
                this.object[this.variable] += this.upgrade_increment;
            }
            else{
                this.object[this.variable] -= this.upgrade_increment;
            }
        }
    };


    this.sprite.on('mousedown', this.onClick, this);
};
