import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']  // Corrected here
})
export class ProjectComponent {
  @Input() imageUrl: string= "";
  @Input() description: string = "";
  @Input() tools: string = "";
  @Input() title: string = "";
}
