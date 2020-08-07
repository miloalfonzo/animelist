import React from "react";
import Anime from "./Anime";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 20px;
`;

const AnimeList = ({ anime }) => {
  return (
    <Container>
      {anime.map((animes) => (
        <Link to={`/search/${animes.mal_id}`}>
          <Anime key={animes.mal_id} animes={animes} />
        </Link>
      ))}
    </Container>
  );
};

export default AnimeList;
