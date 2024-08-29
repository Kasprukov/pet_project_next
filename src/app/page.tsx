"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters, setPage } from "../store/characterSlice";
import type { RootState, AppDispatch } from "../store/store";
import Cards from "./cards/Cards";
import Filters from "./filters/Filters";
import ReactPaginate from 'react-paginate';

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const { characters, loading, error, currentPage } = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (selectedPage: { selected: number }) => {
    const newPage = selectedPage.selected + 1;
    dispatch(setPage(newPage));
    dispatch(fetchCharacters(newPage));
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl hover:text-green-600 duration-200 mb-5">Rick & Morty</h1>
      <div className="flex">
        <Filters />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? 
          <div className="absolute w-64 h-auto bg-slate-800 m-5 p-4 rounded-lg shadow-lg top-96">Loading...</div>
        :
          <Cards />
        }
      </div>
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          pageCount={42}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </main>
  );
}
