import React from 'react'

const StatPokemons = ({infoStat}) => {

  return (
    <p className='pokemon__stat' >
        <p className='pokemon__stat__name'>{infoStat.stat.name}</p>
        <p>{infoStat.base_stat}</p>
    </p>
  )
}

export default StatPokemons