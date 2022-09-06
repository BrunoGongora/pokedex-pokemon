import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'

const Home = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim()
    if (inputValue.length !== 0) {
      dispatch(setNameTrainer(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value = ''
  }

  return (
    <div className='card__home'>
      <div className='card__home__information'>
        <h1>Hello Trainer</h1>
        <p>Explora el mundo pokemon</p>
        <form className='card__home__form' onSubmit={handleSubmit}>
          <input className='card__home__input' id='name' type="text" placeholder='Escribe tu Nombre' />
          <button className='card__home__btn' >Pokedex</button>
        </form>
      </div>
    </div>
  )
}

export default Home