import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  image: string;
}

interface CharacterState {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

const initialState: CharacterState = {
  characters: [],
  loading: false,
  error: null,
};

export const fetchCharacters = createAsyncThunk<Character[], number, { rejectValue: string }>(
  "characters/fetchCharacters",
  async () => {
    const totalPages = 42;
    const allCharacters: Character[] = [];

    for (let page = 1; page <= totalPages; page++) {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
      if (!response.ok) {
        throw new Error("Помилка!");
      }
      const data = await response.json();
      allCharacters.push(...data.results);
    }

    return allCharacters;
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "Не вдалося завантажити персонажів";
      });
  },
});

export default characterSlice.reducer;
