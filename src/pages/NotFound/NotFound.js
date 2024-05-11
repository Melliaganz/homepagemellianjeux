import React from 'react'
import "./notFound.css"

function NotFound() {
  return (
    <div className='notFoundContainer'>
      <div className="notFoundTitre">
        La page demandé n'existe pas
        </div>
      <div>
        Erreur 404 
        <span className="material-symbols-outlined">
          warning
        </span>
      </div>
    </div>
  )
}

export default NotFound