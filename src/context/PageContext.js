import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PageContext = createContext();

const PageProvider = (props) => {
  const [idanime, setIdanime] = useState(null);
  const [anime, setAnime] = useState({});

  useEffect(() => {
    const getAnime = async () => {
      if (!idanime) return;
      const url = `https://api.jikan.moe/v3/anime/${idanime}`;
      const result = await axios.get(url);
      setAnime(result.data);
    };

    getAnime();
  }, [idanime]);
  return (
    <PageContext.Provider
      value={{
        anime,
        setIdanime
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageProvider;
