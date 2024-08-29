import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./characterThunks";
import { CharacterState } from "@/types/types";

const initialState: CharacterState = {
  characters: [],
  loading: false,
  error: null,
  currentPage: 1,
  species: "",
  status: "",
  gender: "",
  totalPages: 1,
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSpecies: (state, action) => {
      state.species = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
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
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch characters";
      });
  },
});

export const { setPage, setSpecies, setStatus, setGender } = characterSlice.actions;
export default characterSlice.reducer;
