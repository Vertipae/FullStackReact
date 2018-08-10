import React from 'react'

const Person = ({ person }) => {
    return (
        // Palauta lista elementti
        <li key={person.id}>{person.name} {person.number}</li>

    )
}

export default Person