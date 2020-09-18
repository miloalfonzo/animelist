import React, { useContext, useState } from "react";
import Error from "./Error";
import styled from "styled-components";
import { AnimeContext } from "../context/AnimeContext";

const Input = styled.input`
  width: 30vw;
  padding: 15px;
  border-radius: 5px 0 0 5px;
  outline: none;
  border: none;
  background: white;
`;
const Button = styled.button`
  padding: 15px;
  background: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  &:hover i {
    transform: scale(1.5);
  }
`;

const Form = styled.form`
  padding: 15px;
`;

const Search = () => {
  const { setAnimesearch } = useContext(AnimeContext);

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
      {error ? <Error msg="You can't leave an empty field" /> : null}
      <Form onSubmit={onSubmit}>
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
      </Form>
    </div>
  );
};

export default Search;
