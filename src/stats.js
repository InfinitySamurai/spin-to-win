function Stats(){
    this.money = 0;


    this.addMoney = function(amount){
        this.money += amount;
    };

    this.removeMoney = function(amount){
        if(amount > this.money){
            return false;
        }
        else{
            this.money -= amount;
            return true;
        }
    };
};
