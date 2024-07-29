import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { tag } from '../../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getfoodbyid(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    if(tag=='All')
      return this.getAll();
    else
      return this.getAll().filter(food=>food.tages?.includes(tag));
  }

  getAllTag():tag[]{
    return[
      {name:'All',count:8},
      {name:'Fastfood',count:5},
      {name:'Pizza',count:2},
      {name:'Lunch',count:3},
      {name:'SlowFood',count:2},
      {name:'Fry',count:1},
      {name:'Soup',count:1},
    ]
  }
  
  getAll(): Foods[] {
    return [
     {
      id:1,
      name:"Pizza",
      cookTime:'20-25',
      price:11.7,
      favorite:true,
      origins:['italy','asia'],
      star:4.5,
      imageUrl:'/assets/th (3).jpeg',
      tages:['Fastfood','Burger','Pizza']
     },
     {
      id:2,
      name:"Pasta",
      cookTime:'15-20',
      price:8.3,
      favorite:false,
      origins:['italy'],
      star:4.5,
      imageUrl:'/assets/th (2).jpeg',
      tages:['fastfood','lunch']
     },
     {
      id:3,
      name:"Burger",
      cookTime:'10-15',
      price:5,
      favorite:true,
      origins:['germany','us'],
      star:4.5,
      imageUrl:'/assets/th.jpeg',
      tages:['fastfood','Fastfood']
     },
     {
      id:4,
      name:"Fried Potatoes",
      cookTime:'10-20',
      price:7,
      favorite:true,
      origins:['belgium','france'],
      star:4.5,
      imageUrl:'/assets/th (1).jpeg',
      tages:['fastfood','Fry']
     },
     {
      id:5,
      name:"Vegetables Soup",
      cookTime:'05-10',
      price:12.5,
      favorite:true,
      origins:['india','asia'],
      star:4,
      imageUrl:'/assets/th (5).jpeg',
      tages:['SlowFood','Soup']
     },
     {
      id:6,
      name:" Vegetables Pizza",
      cookTime:'20-25',
      price:17.6,
      favorite:true,
      origins:['italy'],
      star:4.5,
      imageUrl:'/assets/th (4).jpeg',
      tages:['Fastfood','Lunch','Pizza']
     },
     {
      id:7,
      name:"Mango juice",
      cookTime:'20-25',
      price:3.5,
      favorite:true,
      origins:['India'],
      star:4.5,
      imageUrl:'/assets/th (6).jpeg',
      tages:['Fastfood','Lunch','SlowFood']
     },
     {
      id:8,
      name:"Manchurian",
      cookTime:'10-15',
      price:10,
      favorite:true,
      origins:['India','china'],
      star:4.5,
      imageUrl:'/assets/th(7).jpeg',
      tages:['Fastfood','Lunch']
     },
    ];
  }
}
