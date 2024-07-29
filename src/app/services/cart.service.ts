import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Foods } from '../shared/models/food';
import { cartitem } from '../shared/models/cartitem';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  private cart: Cart = new Cart();

  addtocart(food:Foods):void{
    let cartItem=this.cart.items.find(item=>item.food.id === food.id)
    if(cartItem){
      this.changeQuntity(food.id,cartItem.quntity+1);
      return;
    }
    this.cart.items.push(new cartitem(food));
  }

  removetocart(FoodId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.food.id != FoodId)
  }
  changeQuntity(quntity:number, FoodId:number){
     let cartItem=this.cart.items.find(item=>item.food.id=== FoodId);
     if(!cartItem) return;
     cartItem.quntity=quntity;
  }
  getcart():Cart{
    return this.cart;
  }
}
