import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css',
})
export class PokemonDetailComponent {
  @Input() id: string;

  constructor() {
    this.id = '';
  }
}
