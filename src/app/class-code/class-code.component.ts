import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-class-code',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './class-code.component.html',
  styleUrl: './class-code.component.css',
})
export class ClassCodeComponent {
  title = 'pokedex';
  pokemonName: string = 'Pikachu';
  pokemonType: string = 'fire';
  fontWeight = 'lighter';

  pokemonTypeClasses = ['bold'];

  pokemons = ['charizard', 'pikachu', 'bulbasaur', 'squirtle'];

  onPokemonNameChange(event: any) {
    this.pokemonName = event.target.value;
  }

  onClearPokemonType() {
    this.pokemonType = '';
  }

  setPokemonTypeColor(color: string) {
    if (this.pokemonTypeClasses.length > 1) {
      this.pokemonTypeClasses.pop();
    }
    this.pokemonTypeClasses.push(color);
  }

  setFontWeightToBold() {
    this.fontWeight = 'bold';
  }
}
