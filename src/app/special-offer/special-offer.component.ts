import { Component } from '@angular/core';
import { arrowRight, offer } from '../../shared/constants';

@Component({
  selector: 'app-special-offer',
  standalone: true,
  imports: [],
  template: `
    <section
      class="flex items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div class="flex-1">
        <img
          src="{{ offer }}"
          alt=""
          width="773px"
          height="687px"
          class="object-contain w-full"
        />
      </div>

      <div class="flex flex-1 flex-col">
        <h2 class="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span class="text-red-400">Special</span> Offer
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
        <div class="mt-11 flex flex-wrap gap-4">
          <button
            class="flex justify-center items-center gap-2 px-7 py-2 border font-montserrat text-lg leading-none bg-red-400 rounded-full text-white border-red-400"
          >
            Shop now
            <img
              src="{{ arrowRight }}"
              alt="arrow right icon"
              class="ml-2 rounded-full w-5 h-5"
            />
          </button>
          <button
            class="flex justify-center items-center gap-2 px-7 py-2 border font-montserrat text-lg leading-none bg-white rounded-full text-gray-400 hover:bg-gray-100 border-gray-400"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  `,
  styleUrl: './special-offer.component.css',
})
export class SpecialOfferComponent {
  offer = offer;
  arrowRight = arrowRight;
}
