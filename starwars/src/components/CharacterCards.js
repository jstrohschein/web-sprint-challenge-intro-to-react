import React from 'react'
import CharacterCard from './CharacterCard'

const CharacterCards = (props) => {


  return (


    props.data.map((theCharacter, index) => {
      return <CharacterCard key={index} info={theCharacter} />
    })

  )

}

export default CharacterCards