import { Component } from '@angular/core';
import { arrowRight, bigShoe1, statistics } from '../../shared/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
     id="home"
     class="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
    <div class="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:sm:px-16 max-xl:px-8 pt-28">
      <p class="text-xl font-montserrat text-red-400">Our Summer Collections</p>
      <h1 class="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
        <span class="xl:bg-white xl:bg-opacity-50 xl:whitespace-nowrap relative z-10 pr-10 rounded-full">The New Arrival</span>
        <br/>
        <span class="text-red-400 inline-block mt-3">Nike</span> Shoes
      </h1>
      <p class="font-montserrat text-gray-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">Discover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
      <button class="flex justify-center items-center gap-2 px-7 py-2 border font-montserrat text-lg leading-none bg-red-400 rounded-full text-white border-red-400">
        
          Shop now
          <img src="{{arrowRight}}" alt="arrow right icon" class="ml-2 rounded-full w-5 h-5">
        
      </button>

      <div class="flex justify-start items-start flex-wrap w-fit mt-20 gap-16">
        <div *ngFor="let stat of statistics">
          <p class="text-4xl font-palanquin font-bold">{{ stat.value }}</p>
          <p class="font-montserrat leading-7 text-gray-500">{{ stat.label }}</p>

        </div>
      </div>
    </div>

    <div>
      <img src="{{ bigShoe1 }}" alt="Big Shoe 1">
    </div>
    </section>
  `,
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  arrowRight = arrowRight;
  statistics = statistics;
  bigShoe1 = bigShoe1;

}
