import React, { useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ setPokemon, pokemon, API }) {
  useEffect(() => {
    fetch(API)
    .then ((r => r.json()))
    .then((pokemonData) => setPokemon(pokemonData))
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const displayPokemon = pokemon.map((poke) => {
    return <PokemonCard key={poke.id} pokemon={poke} />
  })



  return (
    <Card.Group itemsPerRow={6}>
      {displayPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
