import { Component } from '@angular/core';
import { services } from '../../shared/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="max-container flex justify-center flex-wrap gap-9">
      <div *ngFor="let service of services" class="flex-1 sm:w-[350px] sm:min-w-[350px] w-full  rounded-[20px] shadow-xl px-10 py-16">
        <div class="w-11 h-11 flex justify-center items-center bg-red-400 rounded-full">
          <img src="{{ service.imgURL }}" alt="{{ service.label }}" width="24px" height="24px">
        </div>
        <h3 class="mt-5 font-palanquin text-3xl leading-normal font-bold">{{ service.label }}</h3>
        <p class="mt-3 break-words font-montserrat text-lg leading-normal text-gray-400">{{ service.subtext }}</p>
      </div>
    </section>
  `,
  styleUrl: './services.component.css'
})
export class ServicesComponent {
services = services;
}
