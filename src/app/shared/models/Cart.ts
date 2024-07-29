import { cartitem } from "./cartitem";

export class Cart {
    items: cartitem[] = [];

    get totalprice(): number {
        let totalprice = 0;
        this.items.forEach(item => {
            totalprice += item.price; 
        });
        console.log(totalprice);
        return totalprice;
    }
}