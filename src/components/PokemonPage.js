import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const API = "http://localhost:3001/pokemon"

function PokemonPage() {
  const [pokemon, setPokemon] = useState ([])
  const [searchQuery, setSearchQuery] = useState("")

  const displayedPokemon = pokemon.filter((poke) => {
    return poke.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  function handleAddPokemon(newPokemon){
    const updatedPokemon = [newPokemon, ...pokemon];
    setPokemon(updatedPokemon)
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddPokemon={handleAddPokemon} API={API} />
      <br />
      <Search setSearchQuery={setSearchQuery}/>
      <br />
      <PokemonCollection pokemon={displayedPokemon} setPokemon={setPokemon} API={API}/>
    </Container>
  );
}

export default PokemonPage;
