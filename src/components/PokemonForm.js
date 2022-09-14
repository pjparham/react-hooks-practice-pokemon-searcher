import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ API, handleAddPokemon }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  })

  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault()
    const newPokemon = {
      name: `${formData.name}`,
      hp: `${formData.hp}`,
      sprites: {
        front: `${formData.frontUrl}`,
        back: `${formData.backUrl}`
      }
    }
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon)
    })
      .then((r) => r.json())
      .then((pokemon) => handleAddPokemon(pokemon))
      setFormData({name: "", hp: "", frontUrl: "", backUrl: ""})
    }
    

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid
            label="Name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
            name="name" 
          />
          <Form.Input
            fluid 
            label="hp" 
            placeholder="hp" 
            value={formData.hp} 
            onChange={handleChange} 
            name="hp" 
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            value={formData.frontUrl}
            onChange={handleChange}
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            value={formData.backUrl}
            onChange={handleChange}
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
