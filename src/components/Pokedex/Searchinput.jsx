import React from 'react'

const Searchinput = ({setPokeSearch, setOptionType}) => {

const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchInput.value.trim().toLowerCase())
    setOptionType('All')
    e.target.searchInput.value = ''
}

  return (
    <div className='input_search'>
        <form onSubmit={handleSubmit}>
            <input className='input_search_value' id='searchInput' type="text" placeholder='Buscar Pokemon' />
            <button className='btn_input'>Search</button>
        </form>
    </div>
  )
}

export default Searchinput