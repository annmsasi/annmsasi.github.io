import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from "../carousel/carousel.component";
import { ProjectComponent } from "../project/project.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterModule, CarouselComponent, ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
