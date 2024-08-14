import { Component } from '@angular/core';
import { arrowRight, shoe8 } from '../../shared/constants';

@Component({
  selector: 'app-super-quality',
  standalone: true,
  imports: [],
  template: `
    <section
      id="about-us"
      class="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div class="flex flex-1 flex-col">
        <h2 class="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span class="text-red-400">Super </span>
          <span class="text-red-400">Quality</span> Shoes
        </h2>
        <p class="mt-4 lg:max-w-lg info-text font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam
          veritatis totam laudantium ullam sit culpa sunt magnam vel! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Cum veniam
          veritatis totam laudantium ullam sit culpa sunt magnam vel! Vitae vel
          quas id vero delectus illo ipsam repudiandae veniam blanditiis. Vitae
          vel quas id vero delectus illo ipsam repudiandae veniam blanditiis.
        </p>
        <p class="mt-6 lg:max-w-lg info-text font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam
          veritatis totam laudantium ullam sit culpa sunt magnam vel!
        </p>
        <div class="mt-11">
          <button
            class="flex justify-center items-center gap-2 px-7 py-2 border font-montserrat text-lg leading-none bg-red-400 rounded-full text-white border-red-400"
          >
            View details
          </button>
        </div>
      </div>
      <div class="flex flex-1 justify-center items-center">
        <img src="{{ shoe8 }}" alt="shoe8" width="570px" height="522px" class="object-contain">
      </div>
    </section>
  `,
  styleUrl: './super-quality.component.css',
})
export class SuperQualityComponent {
  shoe8 = shoe8;
}
