import React, { useContext } from "react";
import styled from "styled-components";
import { PageContext } from "../context/PageContext";

const Container = styled.div`
  color: black;
`;
const Body = styled.div`
  margin-top: 1rem;
  .side {
    img {
      border-radius: 0.8rem;
      width: 68%;
      height: auto;
    }
  }
  .right {
    text-align: left;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    a {
      font-size: 1.3rem;
      color: #eb6864;
      i {
        padding: 0.5rem;
        font-size: 1.5rem;
      }
    }
  }
  .parent {
    display: grid;
    grid-template-columns: minmax(150px, 25%) 1fr;
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

const ShowAnime = () => {
  const { anime } = useContext(PageContext);
  //console.log(anime);
  return (
    <Container>
      <Header>
        <h2> {anime.title} </h2>{" "}
      </Header>{" "}
      <Body>
        <div className="parent">
          <section className="section side">
            <img src={anime.image_url} alt={anime.title} />{" "}
            <p>
              {" "}
              {anime.score} <i className="fas fa-star"> </i>{" "}
            </p>{" "}
            <p> Episodes: {anime.episodes} </p>{" "}
          </section>{" "}
          <section className="section right">
            <h4> {anime.title_japanese} </h4> <p> {anime.synopsis} </p>{" "}
            <p> Premiered: {anime.premiered} </p>{" "}
            <p> Rating: {anime.rating} </p>{" "}
            <a href="/search">
              <i className="fas fa-backward"> </i>
              Go back{" "}
            </a>{" "}
          </section>{" "}
        </div>{" "}
      </Body>{" "}
    </Container>
  );
};

export default ShowAnime;
