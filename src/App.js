import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import AnimeList from "./components/AnimeList";
import axios from "axios";

function App() {
  const [animesearch, setAnimesearch] = useState({});
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    if (Object.keys(animesearch).length === 0) return;

    const consultAPI = async () => {
      const url = `https://api.jikan.moe/v3/search/anime?q=${animesearch}&page=1`;

      const result = await axios.get(url);

      setAnime(result.data.results);
    };
    consultAPI();
  }, [animesearch]);

  return (
    <div className="App">
      <h2>Esto va a ser una app otaka</h2>
      <Search setAnimesearch={setAnimesearch} />
      <AnimeList anime={anime} />
    </div>
  );
}

export default App;
