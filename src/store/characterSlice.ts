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
  currentPage: number;
}

const initialState: CharacterState = {
  characters: [],
  loading: false,
  error: null,
  currentPage: 1,
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (page: number) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    if (!response.ok) {
      throw new Error("Response was not ok");
    }
    const data = await response.json();
    return { results: data.results, page };
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload.results;
        state.currentPage = action.payload.page;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch characters";
      });
  },
});

export const { setPage } = characterSlice.actions;
export default characterSlice.reducer;
