import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { cartitem } from '../shared/models/cartitem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartservice: CartService) {
    this.setcart();
  }

  ngOnInit(): void {}
  setcart() {
    this.cart = this.cartservice.getcart();
  }
  removeFromCart(cartItem: cartitem) {
    this.cartservice.removetocart(cartItem.food.id);
    this.setcart();
  }
  changeQuntity(cartItem: cartitem, quntityinstring: string) {
    const quntity = parseInt(quntityinstring);
    this.cartservice.changeQuntity(cartItem.food.id, quntity);
    this.setcart();
  }
}
