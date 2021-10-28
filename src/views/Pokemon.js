import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PokemonCard from "../components/PokemonCard";
import getPokemon from "../utils/fetch/getPokemon";
import "../assets/fonts.css"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const PokemonContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 30px;
`;

const LoadMoreButton = styled.button`
  background-color: white;
  border: 1.5px solid red;
  border-radius: 6px;
  color: #555;
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  line-height: 1.42857;
  margin: 0;
  padding: 18px 30px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  &:hover {
    background-color: #e6e6e6;
  }
`;

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextQuery, setNextQuery] = useState("");
  useEffect(() => {
    getPokemon().then(({data, status}) => {
      if (status === 200) {
        setPokemons(data.results);
        setNextQuery(data.next);
      } else {
        console.log(`An error has occurred: ${status}`);
      }
    });
  }, []);
  const onLoadMore = () => {
    getPokemon(nextQuery).then(({data, status}) => {
      if (status === 200) {
        setPokemons(pokemons.concat(data.results));
        setNextQuery(data.next);
      } else {
        console.log(`An error has occurred: ${status}`);
      }
    });
  };
  console.log(pokemons);
  console.log(nextQuery);
  return (
  <Container>
    <PokemonContainer>
      {pokemons.map(({name, url}) => {
        const id = parseInt(url.split("/")[url.split("/").length - 2]);
        return <PokemonCard name={name} id={id} url={url} key={id}/>;
      })}
    </PokemonContainer>
    <LoadMoreButton onClick={onLoadMore}> Cargar más Pokémon</LoadMoreButton>
  </Container>
  );
};

export default Pokemon;
