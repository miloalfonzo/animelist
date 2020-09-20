import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AnimeContext = createContext();

const AniProvider = (props) => {
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
      }, 2000);
    };
    consultAPI();
  }, [animesearch]);

  return (
    <AnimeContext.Provider
      value={{
        anime,
        setAnime,
        animesearch,
        setAnimesearch,
        loading,
        setLoading
      }}
    >
      {props.children}{" "}
    </AnimeContext.Provider>
  );
};

export default AniProvider;
