import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getPokemonDetail from "../utils/fetch/getPokemonDetail";
import PokemonDetailCard from "../components/PokemonDetailCard";
import { pokemonImage } from "../utils/pokemonImage";

const BackButton = styled.a`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 1rem;
  color: black;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid black;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #f2f2f2;
  &:hover {
    background-color: #e6e6e6;
  }
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BackArrow = styled.i`
border: solid black;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 3px;
transform: rotate(135deg);
-webkit-transform: rotate(135deg);
margin-right: 10px;
`;

const firstLetterUppercase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokemonDetail = ({ match }) => {
  const [pokemon, setPokemon] = useState({});
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [types, setTypes] = useState([]);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [stats, setStats] = useState([]);
  const [id, setId] = useState("");


  useEffect(() => {
    getPokemonDetail(match.params.id).then(({data, status}) => {
      if (status === 200) {
        setPokemon(data);
        setName(firstLetterUppercase(data.name));
        setImage(pokemonImage(String(data.id).padStart(3, "0")));
        setId(String(data.id).padStart(3, "0"));
        setTypes(data.types.map(x => firstLetterUppercase(x.type.name)));
        setHeight(data.height/10);
        setWeight(data.weight/10);
        setAbilities(data.abilities.map(x => firstLetterUppercase(x.ability.name)));
        setStats(data.stats.map(x => [firstLetterUppercase(x.stat.name), x.base_stat]));
      } else {
        console.log(`An error has occurred: ${status}`);
      }
    });
  }, [match.params.id]);
  return (
    <Container >
      <BackButton onClick={() => window.history.back()}><BackArrow></BackArrow><span>Volver</span></BackButton>
      
      <PokemonDetailCard 
      image={image} 
      name={name} 
      height={height} 
      weight={weight}
      types={types}
      abilities={abilities}
      stats={stats}
      id={id}
      />
    </Container>

  );
}

export default PokemonDetail;
