import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async ({ page, status, gender, species }: { page: number; status: string; gender: string; species: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&status=${status}&gender=${gender}&species=${species}`
    );
    if (!response.ok) {
      throw new Error("Response was not ok");
    }
    const data = await response.json();
    return {
      results: data.results,
      page,
      totalPages: data.info.pages,
    };
  }
);
