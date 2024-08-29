export interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  image: string;
}

export interface CharacterState {
  characters: Character[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  species: string;
  status: string;
  gender: string;
  totalPages: number;
}
