"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../store/characterSlice";
import type { RootState, AppDispatch } from "../store/store";
import Cards from "./cards/Cards";
import Filters from "./filters/Filters";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const {loading, error } = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters(1));
  }, [dispatch]);

  if (error) return <div>Error: {error}</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl hover:text-green-600 duration-200 mb-5">Rick & Morty</h1>
      <div className="flex flex-row gap-10">
        <Filters />
      </div>
      <div className="flex flex-row justify-center flex-wrap">
        {loading ? 
          <div className="absolute w-64 h-auto bg-slate-800 m-5 p-4 rounded-lg shadow-lg top-96">Loading...</div>
        :
          <Cards />
        }
      </div>
    </main>
  );
}
