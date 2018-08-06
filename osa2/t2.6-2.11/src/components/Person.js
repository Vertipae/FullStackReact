import React from 'react'

const Person = ({ person }) => {
    return (
        // Palauta lista elementti
        <li key={person.id}>{person.name}</li>
        
    )
}

export default Person