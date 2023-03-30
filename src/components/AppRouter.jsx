import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FavoritoPage from '../pages/FavoritoPage'
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="favoritos" element={<FavoritoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default AppRouter
