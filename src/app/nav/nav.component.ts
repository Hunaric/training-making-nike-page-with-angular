import { Component } from '@angular/core';
import { navLinks, hamburger } from '../../shared/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="sm:px-16 px-8 py-8 relative w-full bg-white">
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
          <img src="{{hamburger}}" alt="Hamburger" width="25px" height="25px" (click)="toggleMenu()" class="cursor-pointer">
        </div>
      </nav>
      <ul *ngIf="isMenuOpen" class="lg:hidden flex flex-col items-center mt-4 space-y-4 text-center py-4 bg-white shadow-lg transition-transform duration-700 ease-in-out transform z-20 w-full absolute left-0 top-full">
        <li *ngFor="let link of navLinks">
          <a href="{{ link.href }}" class="font-montserrat leading-normal text-lg text-gray-400">{{ link.label }}</a>
        </li>
      </ul>
    </header>
  `,
  styleUrl: './nav.component.css'
})
export class NavComponent {
  navLinks = navLinks;
  hamburger = hamburger;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
