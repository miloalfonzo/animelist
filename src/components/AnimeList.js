import React from "react";
import Anime from "./Anime";
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
        <Anime key={animes.mal_id} animes={animes} />
      ))}
    </Container>
  );
};

export default AnimeList;
