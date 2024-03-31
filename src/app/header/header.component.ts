import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [RouterOutlet, RouterLink],
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
