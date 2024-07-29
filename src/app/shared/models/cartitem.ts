import { Foods } from "./food";

export class cartitem{
    constructor(food:Foods){
        this.food=food;
    }
    food:Foods;
    quntity:number=1;
    
    get price():number{
        return this.quntity*this.food.price;
    }
}