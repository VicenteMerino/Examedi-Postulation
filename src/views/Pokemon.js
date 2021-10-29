import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
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

const Button = styled.button`
  background-color: white;
  border: 1.5px solid;
  border-color: ${props => props.color && css`${props.color}`};
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
  margin-right: 20px;
  margin-left: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nextQuery, setNextQuery] = useState("");
  const [initialPokemon, setInitialPokemon] = useState([]);
  const [initialNextQuery, setInitialNextQuery] = useState("");
  useEffect(() => {
    getPokemon().then(({data, status}) => {
      if (status === 200) {
        setPokemon(data.results);
        setNextQuery(data.next);
        setInitialPokemon(data.results);
        setInitialNextQuery(data.next);
      } else {
        console.log(`An error has occurred: ${status}`);
      }
    });
  }, []);
  const onLoadMore = () => {
    getPokemon(nextQuery).then(({data, status}) => {
      if (status === 200) {
        setPokemon(pokemon.concat(data.results));
        setNextQuery(data.next);
      } else {
        console.log(`An error has occurred: ${status}`);
      }
    });
  };
  const onCollapse = () => {
    window.scroll({top: 0, left: 0});
    setPokemon(initialPokemon);
    setNextQuery(initialNextQuery);
  };
  return (
  <Container>
    <PokemonContainer>
      {pokemon.map(({name, url}) => {
        const id = parseInt(url.split("/")[url.split("/").length - 2]);
        return <PokemonCard name={name} id={id} url={url} key={id}/>;
      })}
    </PokemonContainer>
    <ButtonContainer>
      <Button color="green" onClick={onLoadMore}> Cargar más Pokémon</Button>
      <Button color="red" onClick={onCollapse}> Colapsar</Button>
    </ButtonContainer>

  </Container>
  );
};

export default Pokemon;
