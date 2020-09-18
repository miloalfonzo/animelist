import React, { useContext } from "react";
import Search from "../components/Search";
import AnimeList from "../components/AnimeList";
import Spinner from "../components/Spinner";
import styled from "styled-components";
import { AnimeContext } from "../context/AnimeContext";

const Header = styled.div`
  padding: 30px;
  height: 110px;
  background-color: #369;
  h2 {
    margin: 0;
  }
`;

function Home() {
  const { loading } = useContext(AnimeContext);

  return (
    <div className="App">
      <Header>
        <h2> Find your favorite anime on My Anime List! </h2> <Search />
      </Header>{" "}
      {loading ? <Spinner /> : <AnimeList />}{" "}
    </div>
  );
}

export default Home;
