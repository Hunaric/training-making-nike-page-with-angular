import { Component } from '@angular/core';
import { arrowRight, bigShoe1, statistics, shoes, bgCard, collectionBackground } from '../../shared/constants';
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

    <div class="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-gray-100 bg-cover bg-center" [ngStyle]="{'background-image': 'url(' + bgBigCard + ')'}">
      <img src="{{ bigShoeImage }}" alt="Big Shoe 1" width="610px" height="500px" class="object-contain relative z-10">
      <div class="flex sm:gap-6 absolute -bottom-[5%]">
        <div class="" *ngFor="let shoe of shoes">
          <div class="border-2 rounded-xl cursor-pointer max-sm:flex-1" [ngClass]="bigShoeImage === shoe.bigShoe ? 'border-red-400' : 'border-transparent'" (click)="changeBigShoe(shoe)">
            <div class="flex justify-center items-center bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4"
            [ngStyle]="{'background-image': 'url(' + bgCard + ')'}"
            >
              <img 
               src="{{ shoe.bigShoe }}" alt="shoe collection" width="127px" height="103px" class="object-contain"
              >
            </div>
          </div>
        </div>

      </div>
    </div>
    </section>
  `,
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  arrowRight = arrowRight;
  statistics = statistics;
  bigShoeImage = bigShoe1;
  shoes = shoes;
  bgCard = bgCard;
  bgBigCard = collectionBackground;

  changeBigShoe(shoe: any) {
    if(this.bigShoeImage !== shoe.bigShoe) {
      // changeBigShoeImage(shoe.bigShoe)
      this.bigShoeImage = shoe.bigShoe;
      console.log('Shoe changed: ', shoe.bigShoe)
    }

  }

}
