export interface Pokemon {
  // Model Pokemon
  id: number;
  name: string;
  size: number;
  types: string[];
  abilities: string[];
  imageUrl: string;
  // Es el lugar donde creamos el Pokemon base
}
