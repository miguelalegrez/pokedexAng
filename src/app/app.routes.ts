import { Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { ClassCodeComponent } from './class-code/class-code.component';

export const routes: Routes = [
  { path: 'pokemon-detail/:id', component: PokemonDetailComponent },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'class-code', component: ClassCodeComponent },
];
