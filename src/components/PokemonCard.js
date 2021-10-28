import React, { useState } from "react";
import styled from "styled-components";
import { pokemonImage } from "../utils/pokemonImage";
import '../assets/fonts.css';

const PokemonCard = () => {
  const pokid = 1;
  const buttonColor = () => {
    if (pokid % 3 === 0) {
      return "red";
    } else if (pokid % 3 === 1) {
      return "blue";
    } else {
      return "green";
    }
  };
  const name = "Bulbasaur"
  const id = "001"
  const image = pokemonImage(id);
  const PokemonCard = styled.div`
  margin: 10px 10px 10px 10px;
  border: 1px solid black;
  width: 250px;
  height: 360px;
  border-radius: 10px;
  text-align: center;
  `;
  const BackgroundImage = styled.div`
  background-color: #f5f5f5;
  border-radius: inherit;
  `;
  const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 5px 5px 5px;
  `;
  const PokemonImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  `;
  const TextId = styled.span`
  font-weight: bold;
  color: #808080;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  `;
  const TextName = styled.span`
  font-weight: bold;
  color: black;
  font-family: 'Roboto', sans-serif;
  margin-top: 10px;
  font-size: 20px;
  `;
  const DetailButton = styled.button`
  margin-top: 10px;
  background-color: ${buttonColor()};
  border: none;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: white;
  font-size: 16px;
  padding: 15px 50px 15px 50px;
  cursor: pointer;
  `;
  console.log(name, id, image);
  return (
  <PokemonCard>
    <BackgroundImage>
      <PokemonImage src={image} alt={name} />
    </BackgroundImage>
    <TextContainer>
      <TextId>#{id}</TextId>
      <TextName>{name}</TextName>
    </TextContainer>
    <DetailButton>Ver más</DetailButton>
  </PokemonCard>
  );

};

export default PokemonCard;