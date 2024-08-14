import { Component } from '@angular/core';
import { copyrightSign, footerLinks, footerLogo, socialMedia } from '../../shared/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="max-container">
      <div
        class="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col"
      >
        <div class="flex flex-col items-start">
          <a href="/">
            <img src="{{ footerLogo }}" width="150px" height="46px" alt="" />
          </a>
          <p
            class="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reprehenderit, consequuntur ad laboriosam aut optio beatae quia
            totam, culpa esse, hic soluta quaerat eligendi! Ratione dignissimos
            autem placeat doloremque. Odio!
          </p>
          <div class="flex items-center gap-5 mt-8">
            <div
              *ngFor="let sm of socialMedia"
              class="flex justify-center items-center w-12 h-12 bg-white rounded-full"
            >
              <img
                src="{{ sm.src }}"
                alt="{{ sm.alt }}"
                width="24px"
                height="24px"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          <div *ngFor="let link of footerLinks">
            <h4 class="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{{ link.title }}</h4>
            <ul>
              <li *ngFor="let section of link.links" class="mt-3 text-white font-montserrat text-base leading-normal hover:text-gray-400 cursor-pointer">
                <a href="">{{ section.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
<div class="flex justify-start items-center gap-2 font-montserrat cursor-pointer">
  <img src="{{ copyright }}" alt="copy right sign" height="20px" width="20px" class="rounded-full m-0">
  <p>Copyright. All rights reserved.</p>
</div>
<p class="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerLogo = footerLogo;
  socialMedia = socialMedia;
  footerLinks = footerLinks;
  copyright = copyrightSign;
}
