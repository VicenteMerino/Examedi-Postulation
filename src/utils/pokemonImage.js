export const pokemonImage = (id) => {
  const pokemonId = String(id).padStart(3, '0');
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`
};