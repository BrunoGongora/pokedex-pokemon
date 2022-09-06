import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const SelectType = ({setOptionType, optionType, setPokeSearch}) => {

const [listTypes, setListTypes] = useState()

useEffect(() => {
  const URL = 'https://pokeapi.co/api/v2/type'
  axios.get(URL)
  .then(res => setListTypes(res.data.results))
  .catch(error => console.log(error))
}, [])

const handleChange = e => {
    e.preventDefault()
    setOptionType(e.target.value)
    setPokeSearch('')
}


  return (
    <select value={optionType} className='selected_type' onChange={handleChange}>
        <option value="All">All Pokemons</option>
        {
            listTypes?.map(type => (
                <option value={type.name}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType