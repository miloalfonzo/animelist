import React, { useContext } from "react";
import styled from "styled-components";
import { PageContext } from "../context/PageContext";
import { Link } from "react-router-dom";

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
  button {
    cursor: pointer;
    background: none;
    border: 0;
    line-height: normal;
    overflow: visible;
    padding: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    i {
      font-size: 1.6rem;
      color: #eb6864;
      padding-bottom: 1rem;
    }
  }
  &:hover {
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
  const { setIdanime } = useContext(PageContext);

  return (
    <Container>
      <div className="">
        <Header>
          <h4> {animes.title} </h4>{" "}
        </Header>{" "}
        <img src={animes.image_url} alt={animes.title} />{" "}
        <p>
          {" "}
          {animes.score} <i className="fas fa-star"> </i>{" "}
        </p>{" "}
        <Link to={`/search/${animes.mal_id}`}>
          <button
            className="more"
            onClick={() => {
              setIdanime(animes.mal_id);
            }}
          >
            <i className="fas fa-plus-circle"> </i>{" "}
          </button>{" "}
        </Link>{" "}
      </div>{" "}
    </Container>
  );
};

export default Anime;
