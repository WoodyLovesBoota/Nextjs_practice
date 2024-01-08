import NavigationBar from "@/components/NavigationBar";
import Seo from "@/components/Seo";
import { makeImagePath } from "@/utils";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const API_KEY = "5bffb8ca99dbfae576ba658a895078ee";
const BASE_URL = "https://api.themoviedb.org/3";
import { useQuery } from "react-query";
import styled from "styled-components";

const Home = () => {
  const getPopularMovies = async () => {
    return await axios
      .get(`${BASE_URL}/movie/popular?language=ko-KR&api_key=${API_KEY}`)
      .then((res) => res.data);
  };

  const { data, isLoading } = useQuery<{ results: IMovie[] }>(
    ["movies", "popular"],
    getPopularMovies
  );

  const router = useRouter();

  return (
    <div>
      <Seo title="Home" />
      {isLoading ? (
        "loading"
      ) : (
        <div>
          {data?.results.map((movie) => (
            <Link
              href={{ pathname: `/movies/${movie.id}`, query: { title: movie.title } }}
              as={`/movies/${movie.title}/${movie.id}`}
              key={movie.id}
            >
              <div>
                <Cover bgphoto={`url(${makeImagePath(movie.poster_path)})`}></Cover>
                <div>{movie.title}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

const Cover = styled.div<{ bgphoto: string }>`
  background: ${(props) => props.bgphoto};
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
`;

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
