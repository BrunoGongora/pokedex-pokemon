import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './Pokedex/PokemonCard'
import Searchinput from './Pokedex/Searchinput'
import SelectType from './Pokedex/SelectType'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')

  useEffect(() => {
    if (optionType !== 'All') {
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({results: arr})
        })
        .catch(err => console.log(err))
    } else if (pokeSearch) {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

      const obj = {
        results: [{url}]
      }
      setPokemons(obj)
  } else {
    const URL = 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
      .then(res => setPokemons(res.data))
      .catch(err => console.log(err))
  }
  }, [pokeSearch, optionType])

const nameTrainer = useSelector(state => state.nameTrainer)

return (
  <div className='pokedex__section'>
    <img className='pokedex__section__imagen' src="https://www.desktopbackground.org/download/o/2015/08/10/992848_pokemon-backgrounds-wallpapers-desktop_1024x768_h.jpg" alt="" />
    <div className='inputs_and_text'>
      <h2>Hey {nameTrainer}, explora tu Pokedex !!</h2>
      <div className='inputs'>
        <Searchinput setPokeSearch={setPokeSearch} setOptionType={setOptionType}/>
        <SelectType  setPokeSearch={setPokeSearch} optionType={optionType} setOptionType={setOptionType} />
      </div>
    </div>

    <div className='pokedex__pokemon'>
      {
        pokemons?.results.map(pokemon => (
          <PokemonCard
            key={pokemon.url}
            url={pokemon.url}
          />
        ))
      }
    </div>
  </div>
)
}

export default Pokedex