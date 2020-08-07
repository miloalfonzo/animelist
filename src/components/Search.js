import React, { useState } from "react";
import Error from "./Error";
import styled from "styled-components";

const Input = styled.input`
  margin-top: 10px;
  width: 30vw;
  padding: 15px;
  border-radius: 5px 0 0 5px;
  outline: none;
  border: none;
  --webkit-appearance: none;
`;
const Button = styled.button`
  padding: 15px;
  background: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  --webkit-appearance: none;
  &:hover i {
    transform: scale(1.5);
  }
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
          <i class="fas fa-search"></i>
        </Button>
      </form>
    </div>
  );
};

export default Search;
