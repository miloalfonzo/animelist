import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import AnimeList from "./components/AnimeList";
import Spinner from "./components/Spinner";
import axios from "axios";
import styled from "styled-components";

const Header = styled.div`
  padding: 30px;
  height: 110px;
  background-color: #369;
  h2 {
    margin: 0;
  }
`;

function App() {
  const [animesearch, setAnimesearch] = useState({});
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(animesearch).length === 0) return;

    const consultAPI = async () => {
      const url = `https://api.jikan.moe/v3/search/anime?q=${animesearch}&page=1`;

      const result = await axios.get(url);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAnime(result.data.results);
      }, 3000);
    };
    consultAPI();
  }, [animesearch]);

  const component = loading ? <Spinner /> : <AnimeList anime={anime} />;

  return (
    <div className="App">
      <Header>
        <h2>Find your favorite anime on My Anime List!</h2>
        <Search setAnimesearch={setAnimesearch} />
      </Header>
      {component}
    </div>
  );
}

export default App;
