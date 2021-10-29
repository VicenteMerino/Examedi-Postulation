import React from "react";
import PropTypes from "prop-types";
import { Radar } from "react-chartjs-2";
import styled, { css } from "styled-components";
import { typeColors } from "../utils/typeColors";
import { typeIcons } from "../utils/typeIcons";
import '../assets/fonts.css';

const PokemonImage = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
max-height: 100%;
max-width: 100%;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  flex-wrap: wrap;
  margin-right: 20px;

  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
    vertical-align: top;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${ props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
  margin-bottom: 10px;
  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
`;

const BackgroundImage = styled.div`
background-color: #F0F0F0;
border: 1px solid black;
border-radius: 5px;
max-height: 200px;
max-width: 200px;
`;

const InformationContainer = styled.div`
background-color: #26A8FF;
width: 350px;
height: 150px;
border-radius: 15px;
display: flex;
flex-wrap: wrap;
flex-direction: column;
padding: 30px;
margin-top: 80px;
margin-bottom: 30px;
`;

const StatsNameText = styled.span`
font-family: 'Roboto', sans-serif;
color: white;
font-weight: bold;
margin-bottom: 10px;
-webkit-text-stroke-width: 0.5px;
-webkit-text-stroke-color: black;
font-size: 20px;
`
const StatsNameValue = styled.span`
font-family: 'Roboto', sans-serif;
margin-bottom: 5px;
`

const TypeBadge = styled.div`
background-color: ${props => typeColors[props.type]};
color: white;
font-weight: bold;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 20px;
padding-right: 20px;
margin-bottom: 10px;
margin-top: 10px;
border-radius: 15px;
font-size: 20px;
font-family: 'Roboto', sans-serif;
margin-right: 5px;
`

const DetailCard = styled.div`
background-color: #F8F8F8;
border-radius: 15px;
border: 1px solid #e5e5e5;
height: 600px;
width: 750px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 20px;
`

const PokemonName = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 40px;
font-weight: bold;
margin-bottom: 10px;
`
const TypeImage = styled.img`
height: 40px;
width: 40px;
margin-left: 5px;
`

const TypeContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 10px;
margin-left: 10px;
margin-right: 10px;
`

const PokemonDetailCard = ({ id, image, name, types, abilities, stats, weight, height }) => {
  const statsLabels = stats.map(stat => stat[0]);
  const statsValues = stats.map(stat => stat[1]);
  const data = {
    labels: statsLabels,
    datasets: [
      {
        label: "Base Stats",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: statsValues
      }
    ]
  };
  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    scale: {
      r: {
        pointLabels: {
          font: {
            weight: 'bold',
          }
        },
      },
      min: 0,
      max: Math.max(...statsValues, 150),
      ticks: {
        maxTicksLimit: 4,
        stepSize: Math.round(Math.max(...statsValues, 150) / 4),
        display: false
      }
    },
  };
  return (
    <DetailCard>
      <RowContainer>
        <ColumnContainer alignItems="center">
          <PokemonName>{name} #{id}</PokemonName>
          <BackgroundImage>
            <PokemonImage src={image} />
          </BackgroundImage>
          <ColumnContainer alignItems="center">
            <Radar data={data} options={options} />
          </ColumnContainer>
        </ColumnContainer>
      </RowContainer>
      <RowContainer>
      <ColumnContainer alignItems="center">
        <InformationContainer>
          <div>
              <ColumnContainer>
                <StatsNameText>Height</StatsNameText>
                <StatsNameValue>{height} m</StatsNameValue>
              </ColumnContainer>
              <ColumnContainer>
                <StatsNameText>Weight</StatsNameText>
                <StatsNameValue>{weight} kg</StatsNameValue>
              </ColumnContainer>
            </div>
            <div>
            <ColumnContainer>
              <StatsNameText>Abilities</StatsNameText>
              {abilities.map((ability, index) => (<StatsNameValue key={index}>{ability}</StatsNameValue>))}
            </ColumnContainer>
          </div>
        </InformationContainer>
        <ColumnContainer>
          <h3 style={{fontFamily: "'Roboto', sans-serif", marginLeft: "30px"}}>Types</h3>
          <RowContainer alignItems="center">
              {types.map((type, index) => (
              <TypeContainer>
                <TypeBadge key={index} type={type.toLowerCase()}>
                  <span>{type}</span>
                </TypeBadge>
                <TypeImage src={typeIcons[type.toLowerCase()]} alt={type} />
              </TypeContainer>))}
        </RowContainer>
        </ColumnContainer>

      </ColumnContainer>
      </RowContainer>

    </DetailCard>
  );
}

PokemonDetailCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array,
  abilities: PropTypes.array,
  stats: PropTypes.array,
  moves: PropTypes.array,
  weight: PropTypes.number,
  height: PropTypes.number,
  id: PropTypes.number
};

export default PokemonDetailCard;
