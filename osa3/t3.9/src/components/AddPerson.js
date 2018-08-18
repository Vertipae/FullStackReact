import React from 'react'

const AddPerson = ({ state, addPerson, handlePersonChange, handleNumberChange }) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                Nimi: <input
                    value={state.newName}
                    placeholder='Nimi'
                    onChange={handlePersonChange} />
            </div>
            <div>
                Numero: <input value={state.newNumber}
                    placeholder='Numero'
                    onChange={handleNumberChange} />
            </div>

            <div>
                <button type="submit">Lisää</button>
            </div>
        </form>
    )
}

export default AddPerson