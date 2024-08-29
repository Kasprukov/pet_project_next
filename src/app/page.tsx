'use client'

import React, { useEffect } from "react";
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import { 
  setPage, 
  setSpecies, 
  setStatus, 
  setGender 
} 
  from "@/store/characterSlice";
import type { RootState, AppDispatch } from "@/store/store";
import Filters from "@/components/Filters/Filters";
import Cards from "@/components/Card/Cards";

import Pagination from "@/components/Pagination/Pagination";
import { Loader } from "@/components/Loader";
import { fetchCharacters } from "@/store/characterThunks";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, currentPage, totalPages, species, status, gender } = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters({ page: currentPage, species, status, gender }));
  }, [dispatch, currentPage, species, status, gender]);

  const handlePageChange = (selectedPage: { selected: number }) => {
    const newPage = selectedPage.selected + 1;
    dispatch(setPage(newPage));
  };

  return (
    <main className="flex min-h-screen flex-col items-center mb-24 mt-14">
      <Image 
        src="/640px-Rick_and_Morty.svg.png" 
        alt="Rick and Morty logo" 
        width={400} 
        height={400} 
        className="w-auto object-cover rounded-lg mb-3 transition-transform duration-300 transform hover:scale-105" 
      />
      <div className="flex">
        <Filters
          updateSpecies={(value) => dispatch(setSpecies(value))}
          updateStatus={(value) => dispatch(setStatus(value))}
          updateGender={(value) => dispatch(setGender(value))}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="fixed justify-self-center top-10">
            <Loader />
          </div>
        ) : error ? (
          <div className="fixed justify-self-center top-2/4 text-red-500 text-xl font-bold">
            <p>Error: {error}</p>
            <p>Please try again later.</p>
          </div>
        ) : (
          <Cards />
        )}
      </div>

      <Pagination pageCount={totalPages} onPageChange={handlePageChange} />

      <Image 
        src="/rick-and-morty.png" 
        alt="Rick and Morty photo" 
        width={400} 
        height={400} 
        className="fixed -left-5 bottom-0 w-0 lg:w-72" 
      />
    </main>
  );
}
