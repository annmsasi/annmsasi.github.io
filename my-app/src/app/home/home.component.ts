import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { DescriptorComponent } from '../descriptor/descriptor.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CarouselComponent, DescriptorComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
}
