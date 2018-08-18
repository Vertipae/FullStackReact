import React from 'react'

const Person = ({ person, deletePerson }) => {
    return (
        // Palauta lista elementti
        <li key={person.id}>{person.name} {person.number}<button onClick={() => deletePerson(person.id, person.name)}>Poista</button></li>

    )
}

export default Person