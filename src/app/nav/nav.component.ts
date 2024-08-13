import { Component } from '@angular/core';
import { navLinks, hamburger } from '../../shared/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="sm:px-16 px-8 py-8 absolute z-10 w-full">
      <nav class="flex justify-between items-center max-container">
        <a href="/">
          <img src="assets/images/header-logo.svg" alt="Logo" width="130px" height="29">
        </a>
        <ul class="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li *ngFor="let link of navLinks">
            <a class="font-montserrat leading-normal text-lg text-gray-400" href="{{link.href}}">{{ link.label }}</a>
          </li>
        </ul>
        <div class="hidden max-lg:block">
          <img src="{{hamburger}}" alt="Hamburger" width="25px" height="25px">
        </div>
      </nav>
    </header>
  `,
  styleUrl: './nav.component.css'
})
export class NavComponent {
  navLinks = navLinks;
  hamburger = hamburger;

  constructor() {
    console.log(navLinks);
  }

}
