import { Component } from '@angular/core';
import { reviews, star } from '../../shared/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="max-container">
      <h3 class="text-palanquin text-center text-4xl font-bold">
        What Our 
        <span class="text-red-400">Customers </span>
        Say?
      </h3>
      <p class="info-text m-auto font-montserrat mt-4 max-w-lg text-center">
         Odit deserunt, doloribus voluptates fugit optio unde, praesentium alias quia iusto, provident dignissimos dolor non.
      </p>
      <div class="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        <div *ngFor="let review of reviews" class="flex justify-center items-center flex-col">
          <img src="{{ review.imgURL }}" alt="customer" class="rounded-full object-cover w-[120px] h-[120px]">
          <p class="mt-6 max-w-sm text-center info-text font-montserrat">{{ review.feedback }}</p>
          <div class="mt-3 flex justify-center items-center gap-2.5">
            <img src="{{ star }}" alt="" width="24px" height="24px" class="object-contain m-0">
            <p class="text-xl font-montserrat text-gray-400">{{ review.rating }}</p>
          </div>
          <h3 class="mt-3 font-palanquin text-3xl text-center font-bold">{{ review.customerName }}</h3>
        </div>

      </div>
    </section>
  `,
  styleUrl: './customer-reviews.component.css'
})
export class CustomerReviewsComponent {
reviews = reviews;
star = star;
}
