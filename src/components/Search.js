import React, { useState } from "react";
import Error from "./Error";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
`;
const Button = styled.button`
  padding: 10px;
`;
const Search = ({ setAnimesearch }) => {
  const [search, setSearch] = useState({
    anime: ""
  });

  const [error, setError] = useState(false);

  const { anime } = search;

  const onChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (anime.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setAnimesearch(anime);
  };

  return (
    <div>
      {error ? <Error msg="Tenes que ingresar un anime correctamente" /> : null}
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          name="anime"
          placeholder="Look for your favourite anime!"
          onChange={onChange}
          value={anime}
        />
        <Button type="submit" value="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
