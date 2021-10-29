import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getPokemonDetail from "../utils/fetch/getPokemonDetail";
import PokemonDetailCard from "../components/PokemonDetailCard";
import { pokemonImage } from "../utils/pokemonImage";

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

  getPokemonDetail(match.params.id);

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
  );
}

export default PokemonDetail;
