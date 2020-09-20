import React, { useContext } from "react";
//import styled from "styled-components";
import ShowAnime from "../components/ShowAnime";
import NoShow from "../components/NoShow";
import { PageContext } from "../context/PageContext";

const Show = () => {
  const { anime } = useContext(PageContext);
  //console.log(anime);
  return <div className="cont">{anime ? <ShowAnime /> : <NoShow />}</div>;
};

export default Show;
