import { Component } from '@angular/core';

@Component({
  selector: 'app-suscribe',
  standalone: true,
  imports: [],
  template: `
  <section class="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
    <h3 class="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
      Sign Up from
      <span class="text-red-400">Updates </span>
      & Newsletter
    </h3>

    <div class="lg:max-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-gray-400 rounded-full">
      <input type="text" name="" id="" placeholder="suscribe@nike.com" class="input">
      <div class="flex max-sm:justify-end items-center max-sm:w-full">
        
      <button
          class="flex justify-center items-center gap-2 px-7 py-2 border font-montserrat text-lg leading-none bg-red-400 rounded-full text-white border-red-400"
        >
          Sign Up
        </button>
      </div>
    </div>

  </section> 
  `,
  styleUrl: './suscribe.component.css'
})
export class SuscribeComponent {

}
