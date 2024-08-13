import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './nav/nav.component';
import { PopularProductComponent } from './popular-product/popular-product.component';
import { ServicesComponent } from './services/services.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
import { SuperQualityComponent } from './super-quality/super-quality.component';
import { SuscribeComponent } from './suscribe/suscribe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CustomerReviewsComponent,
    FooterComponent,
    HeroComponent,
    NavComponent,
    PopularProductComponent,
    ServicesComponent,
    SpecialOfferComponent,
    SuperQualityComponent,
    SuscribeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nike App';
}
