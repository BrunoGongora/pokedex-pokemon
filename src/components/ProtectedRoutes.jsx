import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

  //The useSelector bring the information of the store

  const nameTrainer = useSelector(state => state.nameTrainer)

  if(nameTrainer) {
    return <Outlet />
  } else {
    return <Navigate to='/' />
  }
}

export default ProtectedRoutes
