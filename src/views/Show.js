import React, { useContext } from "react";
import styled from "styled-components";
import { PageContext } from "../context/PageContext";

const Container = styled.div`
  color: black;
`;

const Show = () => {
  const { anime } = useContext(PageContext);
  //console.log(anime);
  return (
    <Container>
      <h2> {anime.title}</h2>{" "}
    </Container>
  );
};

export default Show;
