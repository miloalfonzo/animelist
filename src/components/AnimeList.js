import React, { useContext } from "react";
import Anime from "./Anime";
import styled from "styled-components";
import { AnimeContext } from "../context/AnimeContext";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 20px;
`;

const AnimeList = () => {
  const { anime } = useContext(AnimeContext);

  return (
    <Container>
      {anime.map((animes) => (
        <Anime key={animes.mal_id} animes={animes} />
      ))}{" "}
    </Container>
  );
};

export default AnimeList;
