import React from "react";
import styled from "styled-components";
//import { PageContext } from "../context/PageContext";

const Container = styled.div`
  a {
    font-size: 1.3rem;
    color: #eb6864;
    i {
      padding: 0.5rem;
      font-size: 1.5rem;
    }
  }
`;

const Header = styled.div`
  padding: 30px;
  height: 2.5rem;
  font-size: 2rem;
  color: white;
  background-color: #369;
  h2 {
    margin: 0;
  }
`;

const NoShow = () => {
  return (
    <Container>
      <Header>
        <h2> No results </h2>{" "}
      </Header>{" "}
      <h2> The anime information you were looking for cannot be found. </h2>{" "}
      <a href="/search">
        <i className="fas fa-backward"> </i>
        Go back{" "}
      </a>{" "}
    </Container>
  );
};

export default NoShow;
