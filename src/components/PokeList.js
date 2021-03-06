import { useState, useEffect } from 'react';
import axios from 'axios';
import { CLIENT_URL } from '../services/constants';
import Pokemon from './Pokemon';

function PokeList() {
  
  const [pokemons, setPokemons] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(CLIENT_URL);
        const { results } = response.data;
        setPokemons(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <ul className="container collection with-header" style={{ marginTop: 25 }}>
     
      {(pokemons || []).map((pokemon, index) => {
        const { name, url } = pokemon;
        return <Pokemon name={name} url={url} key={index} />
      })}
  </ul>
)

}

export default PokeList;