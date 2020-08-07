import React from "react";
import styled from "styled-components";

const Anime = ({ animes }) => {
  return (
    <div className="">
      <div className="">
        <h2>{animes.title}</h2>
        <img src={animes.image_url} alt="" width="100px" height="150px" />
      </div>
    </div>
  );
};

export default Anime;
