import { Component,} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements CarouselComponent {

  constructor() {
  }
}
