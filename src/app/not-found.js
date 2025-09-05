import React from 'react'
import "./globals.scss";
// création de la page de la gestion d'erreur 404// 
function NotFound() {
  return (
    <div className='error'>
      <h1>404</h1>
      <p>Oups, la page que vous demandez n&apos;existe pas. </p>
      
    </div>
  )
}

export default NotFound
