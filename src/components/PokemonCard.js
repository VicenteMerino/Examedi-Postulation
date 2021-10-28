import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { pokemonImage } from "../utils/pokemonImage";
import '../assets/fonts.css';

const Card = styled.div`
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
background-color: ${props => {
  if (props.id % 3 === 0) {
    return "red";
  } else if (props.id % 3 === 1) {
    return "blue";
  } else {
    return "green";
  }
}};
border: none;
border-radius: 10px;
font-family: 'Roboto', sans-serif;
font-weight: bold;
color: white;
font-size: 16px;
padding: 15px 50px 15px 50px;
cursor: pointer;
display: inline-block;
text-decoration: none;
`;

const PokemonCard = ({name, id, url}) => {
    const pokemonId = String(id).padStart(3, "0");
  const image = pokemonImage(pokemonId);
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
  

  return (
  <Card>
    <BackgroundImage>
      <PokemonImage src={image} alt={capitalName} />
    </BackgroundImage>
    <TextContainer>
      <TextId>#{pokemonId}</TextId>
      <TextName>{capitalName}</TextName>
    </TextContainer>
    <DetailButton as="a" href={url} id={id}>Ver más</DetailButton>
  </Card>
  );

};

export default PokemonCard;