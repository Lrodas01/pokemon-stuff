import React, {useState} from "react";
import axios from "axios";

const App = () => {
    const [pokemon, setPokemon] = useState (" ")
    const [pokemonData, setPokemonData,] = useState ([])
    const [pokemonType, setPokemonType] = useState ("")
  
    const getPokemon = async () => {
      const toArray = [];
  
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const res = await axios.get(url)
        toArray.push (res.data);
        setPokemonType(res.data.types[0].type.name)
        setPokemonData(toArray);
        console.log (res)
      } catch (e) {
        console.log (e)
      }
    };
  
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }
  
    return (
    <div className = "App">
    <h1>Pokedex</h1>
    
      <form onSubmit = {handleSubmit}>
        <label>
          <input 
            type = "text" 
            onChange = {handleChange}
            placeholder = "Enter Pokemon name"
            />
        </label>
      </form>
      {pokemonData.map((data) => {
        return (
          <div className = "container">
            <img src = {data.sprites["front_default"]}/>
            <div className = "divTable">
                <div className = "divBody">
                  <div className = "divTableRow">
                    <div className = "name">Name</div>
                    <div className = "data">{data.name}</div>
                  </div>
                  <div className = "divTableRow">
                    <div className = "name">Height</div>
                    <div className = "data">{" "}{Math.round(data.height * 3.9)} "</div>
                  </div>
                  <div className = "divTableRow">
                    <div className = "name">Weight</div>
                    <div className = "data">{" "}{Math.round (data.weight / 4.3)} lbs</div>
                  </div>
                  <div className = "divTableRow">
                    <div className = "name">Type</div>
                    <div className = "data">{pokemonType}</div>
                  </div>
                </div>
            </div>
          </div>
        )
      })}
    </div>
    );
  }
  
export default App