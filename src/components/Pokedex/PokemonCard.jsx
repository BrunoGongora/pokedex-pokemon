import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import StatPokemons from './StatPokemons'

const PokemonCard = ({url}) => {
  
  const [pokemon, setPokemon] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(url)
    .then(response => setPokemon(response.data))
    .catch(error => console.log(error))
  }, [])

  const handleClick = () => navigate(`/pokedex/${pokemon.name}`)
  

  return (
    <article onClick={handleClick} className='pokemon__card' >
      <header className={`pokemon__card__header bg-${pokemon?.types[0].type.name} `}>
        <img className='pokemon__card__imagen' src={pokemon?.sprites.other['official-artwork']['front_default']} alt="" />
      </header>
      <section className='pokemon__card__body'>
        <h3>{pokemon?.name}</h3>
        <div className='pokemon__type'>
          {
            pokemon?.types.map(slot => (
              <h4 className='pokemon__type__detail' key={slot.type.url}>{slot.type.name} </h4>
            ))
          }
        </div>
      </section>
      <footer>
        <p className='pokemon__stats__information' >
          {
            pokemon?.stats.map(stat => (
              <StatPokemons 
                key={stat.stat.url}
                infoStat={stat}
              />
            ))
          }
        </p>
      </footer>
    </article>
  )
}

export default PokemonCard