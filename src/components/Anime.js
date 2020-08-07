import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 28vw;
  margin: 10px;
  border-radius: 0 0 10px 10px;
  color: #000022;
  border: 0.02px solid #aaa;
  -webkit-box-shadow: 4px 6px 7px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 6px 7px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 6px 7px -2px rgba(0, 0, 0, 0.75);
  img {
    border-radius: 10px;
    width: 68%;
    height: 170px;
  }

  i {
    margin: 3px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Header = styled.div`
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  background-color: #eb6864;
  padding: 2px;
  margin-bottom: 10px;
  color: #fff;
`;

const Anime = ({ animes }) => {
  return (
    <Container>
      <div className="">
        <Header>
          <h4>{animes.title}</h4>
        </Header>

        <img src={animes.image_url} alt={animes.title} />
        <p>
          {animes.score}
          <i className="fas fa-star"></i>
        </p>
      </div>
    </Container>
  );
};

export default Anime;
