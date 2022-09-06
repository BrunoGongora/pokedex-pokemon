import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()

  const { name } = useParams()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(url)
      .then(res => setPokeInfo(res.data))
      .catch(error => console.log(error))
  }, [])
  console.log(pokeInfo)

  return (
    <div className='pokemon__details'>
      <div className='card__pokemon__details'>
        <h1>Nombre: {pokeInfo?.name}</h1>
        <p>Experiencia {pokeInfo?.base_experience}</p>
        <p>Peso: {pokeInfo?.height} Kg</p>
        <div className='images__pokemon'>
          <img className={`bg-color bg-${pokeInfo?.types[0].type.name}`} src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
        <div className='information__card'>
          <div className='pokemon__stats'>
            <h3>Estado</h3>
            {
              pokeInfo?.stats.map(stat => (
                <div className='pokemon__status'>
                  <h3>{stat.stat.name} : </h3>
                  <p>{stat.base_stat}</p>
                </div>
              ))
            }
          </div>
          <div className='information__pokemon'>
            <h3>Type</h3>
            {
              pokeInfo?.types.map(type => (
                <div className='pokemon__tipo'>
                  <p>{type.type.name}</p>
                </div>
              ))
            }
          </div>


          <div className='habilities__pokemon'>
            <h3>Movimientos</h3>
            {
              pokeInfo?.abilities.map(hability => (
                <div className='pokemon__moves'>
                  <p>{hability.ability.name}</p>
                </div>
              ))
            }
          </div>

        </div>

      </div>
    </div>
  )
}

export default PokemonDetails