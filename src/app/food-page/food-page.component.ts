import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
})
export class FoodPageComponent implements OnInit {
  food!: Foods;
  constructor(
    private activatedroute: ActivatedRoute,
    private foodservice: FoodService,
    private cartservice: CartService,
    private router:Router
  ) {
    activatedroute.params.subscribe((params) => {
      if (params['id']) this.food = foodservice.getfoodbyid(params['id']);
    });
  }
  ngOnInit(): void {

  }
  addToCart(){
    this.cartservice.addtocart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
}
