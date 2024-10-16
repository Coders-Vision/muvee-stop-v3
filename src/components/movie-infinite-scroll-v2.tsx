"use client";

import React, { useEffect, useState, useRef } from "react";
import MovieCard from "@/components/movie-card";
import { useRouter } from "next/navigation";
import { Result } from "@/types/movie/movie-result";

type MovieInfiniteScroll = {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};

function MovieInfiniteScroll({
  movies,
  paginatePath,
}: {
  movies: MovieInfiniteScroll;
  paginatePath: string;
}) {
  const router = useRouter();
  const [moviesList, setMoviesList] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false); 
  const lastPageRef = useRef<number>(movies.page || 1);
  const loadingRef = useRef<boolean>(false);

  useEffect(() => {
    if (movies?.results.length) {
      setMoviesList((prevMovies) => {
        // Filter to avoid duplicates
        const newMovies = movies.results.filter(
          (newMovie) => !prevMovies.some((movie) => movie.id === newMovie.id)
        );
        return [...prevMovies, ...newMovies];
      });

      // Update the last loaded page reference
      lastPageRef.current = movies.page;
    }
  }, [movies]);

  const loadMore = () => {
    if (loadingRef.current || lastPageRef.current >= movies.total_pages) return;

    // Mark loading as true to prevent multiple triggers
    setLoading(true); 
    loadingRef.current = true;

    router.replace(`${paginatePath}?page=${lastPageRef.current + 1}`, {
      scroll: false,
    });
    setLoading(false);
    loadingRef.current = false;
  };

  const handleScroll = () => {
    if (loadingRef.current) return; // Skip if currently loading more data

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;

    // Check if the user is near the bottom of the page (e.g., within 300px)
    if (scrollTop + clientHeight >= scrollHeight - 300) {
      loadMore();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mt-5 flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {moviesList.length === 0 && (
          <div className="mx-auto">No Movies Found</div>
        )}
        {moviesList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} showDescription={true} />
        ))}
      </div>
      {loadingRef.current && <div className="">Loading</div>}

      {loading && (
        <div className="my-10 mx-auto">
          <div className="loader"></div> {/* Custom CSS spinner */}
          <span className="ml-2 text-white">Loading more movies...</span>
        </div>
      )}
    </div>
  );
}

export default MovieInfiniteScroll;