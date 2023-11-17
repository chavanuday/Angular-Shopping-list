import { Component } from '@angular/core';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
     name: string = '';
     price: string = '';
     quantity: number = 0;
     shoppingList: any[] = [];
    add() {
        if (this.name.trim()  && this.price.trim() ) {
            this.shoppingList.push({
                name: this.name,
                price: this.price,
                quantity: this.quantity
            });
            this.name = '';
            this.price = '';
            this.quantity = 0;
        }
    }
    remove(index: number) {
        this.shoppingList.splice(index, 1);
    }
    increase(item: any) {
        item.quantity++;
    }
    decrease(item: any) {
        if (item.quantity > 0) {
            item.quantity--;
        }
    }
    getTotalCost() {
        return this.shoppingList.reduce((total, item) => this.quantity * parseFloat(item.price), 0);
    }
}
