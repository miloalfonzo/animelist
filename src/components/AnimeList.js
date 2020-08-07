import React from "react";
import Anime from "./Anime";

const AnimeList = ({ anime }) => {
  return (
    <div>
      {anime.map((animes) => (
        <Anime key={animes.mal_id} animes={animes} />
      ))}
    </div>
  );
};

export default AnimeList;
