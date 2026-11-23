
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface ElectroShop {
  storeName: string;
  storeDescription: string;
  storeAddress: string;
  totalProducts: number;
  isStoreOpen: boolean;
  currency: string;
}

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShop');

  // Store Information
  store: ElectroShop = {
    storeName: "ElectroShop",
    storeDescription: "Your favourite electronics store",
    storeAddress: "Amman, Jordan",
    totalProducts: 12,
    isStoreOpen: true,
    currency: "USD"
  };

  // Products Information
  productNames: string[] = [
    "Laptop",
    "Smartphone",
    "Headphones",
    "Smart Watch",
    "Keyboard"
  ];

  productPrices: number[] = [750, 450, 80, 120, 45];

  featuredProduct = {
    name: this.productNames[0],
    price: this.productPrices[0],
    description: "Description"
  };

  // Store Summary
  totalProducts: number = 0;
  mostExpensive: number = 0;
  cheapest: number = this.productPrices[0];
  totalValue: number = 0;

  // Store Status
  display: string = "";

  constructor() {
    if (this.store.isStoreOpen) {
      this.display = "We are open";
    } else {
      this.display = "We are closed";
    }

    this.totalProducts = this.productPrices.length;

    for (let price of this.productPrices) {
      this.totalValue += price;

      if (price > this.mostExpensive) {
        this.mostExpensive = price;
      }

      if (price < this.cheapest) {
        this.cheapest = price;
      }
    }
  }

  // Discount Information
  discountPercentage: number = 10;

  finalPrice: number =
    this.featuredProduct.price -
    (this.featuredProduct.price * this.discountPercentage / 100);
}
