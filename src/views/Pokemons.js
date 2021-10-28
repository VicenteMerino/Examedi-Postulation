import React, { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import getPokemons from "../utils/fetch/getPokemons";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextQuery, setNextQuery] = useState("");
  useEffect(() => {
    getPokemons(12, 0).then(({data, status}) => {
      if (status === 200) {
        setPokemons(data.results);
        setNextQuery(data.next);
      } else {
        console.log(`An error has occurred: ${status}`);
      }
    });
  }, []);
  console.log(pokemons);
  console.log(nextQuery);
  return (
  <div>
    {pokemons.map(({name, url}) => {
      const id = parseInt(url.split("/")[url.split("/").length - 2]);
      return <PokemonCard name={name} id={id} url={url} key={id}/>;
    })}
  </div>
  );
};

export default Pokemons;
