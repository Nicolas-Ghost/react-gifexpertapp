import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setAnimes }) => {
  
//   const [inputVal, setinputVal] = useState() //Si se deja asi es undefina
  
const [inputVal, setinputVal] = useState('')
  const handleInputChange = (e) =>{
    //   console.log(e.target.value)
      setinputVal(e.target.value)
  }
  
  const handleSubmit = (e) => {
        e.preventDefault()
        if (inputVal.trim().length > 2) {
            setAnimes(an => [inputVal, ...an])
            setinputVal('')    
        }
        

  }

  return (
    <form onSubmit={ handleSubmit }>
        <input 
            type="text"
            value={ inputVal }
            onChange={ handleInputChange }
        />
    </form>
  )
}

// REQUERIDO
AddCategory.prototype = {
    setAnime: PropTypes.func.isRequired
}