import { Component } from '@angular/core';
import { products, star } from '../../shared/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
    id="products"
    class="max-container max-sm:mt-12"
    >
    <div class="flex flex-col justify-start gap-5">
      <h2 class="text-4xl font-palanquin font-bold">Our <span class="text-red-400">Popular</span> Products</h2>
      <p class="lg:max-w-lg mt-2 font-montserrat text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ab consequatur maxime adipisicing elit. Fuga ab consequatur maxime</p>
      
    </div>

    <div class="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
      <div *ngFor="let prod of products" class="">
        <div class="flex flex-1 flex-col w-full max-sm:w-full">
          <img src="{{ prod.imgURL }}" alt="{{ prod.name }}" class="w-[280px] h-[280px]">
          <div class="mt-8 flex justify-start gap-2.5">
            <img src="{{ star }}" alt="rating" width="24px" height="24px">
            <p class="font-montserrat text-xl leading-normal text-gray-400">(4.5)</p>
          </div>
          <h3 class="mt-2 text-2xl leading-normal font-semibold font-palanquin">{{ prod.name }}</h3>
          <p class="mt-2 font-semibold font-montserrat text-red-400 text-2lx leading-normal">{{ prod.price }}</p>
        </div>
      </div>
    </div>
    </section>
  `,
  styleUrl: './popular-product.component.css'
})
export class PopularProductComponent {
  products = products;
  star = star

}
