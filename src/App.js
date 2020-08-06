import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import AnimeList from "./components/AnimeList";
import axios from "axios";

function App() {
  const [animesearch, setAnimesearch] = useState({});

  useEffect(() => {
    if (Object.keys(animesearch).length === 0) return;

    const consultAPI = async () => {
      const { anime } = animesearch;
      const url = `https://api.jikan.moe/v3/search/anime?q=${anime}`;

      const result = await axios.get(url);
      setAnimesearch(result.data.results);
    };

    consultAPI();
  });

  return (
    <div className="App">
      <h2>Esto va a ser una app otaka</h2>
      <Search setAnimesearch={setAnimesearch} />
      <AnimeList />
    </div>
  );
}

export default App;
