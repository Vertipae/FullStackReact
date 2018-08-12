import React from 'react'

const Note = ({ note, toggleImportance }) => {
    // Komponentissa on nappi, jolle on rekisteröity klikkaustapahtuman käsittelijäksi propsien avulla välitetty funktio toggleImportance.
    const label = note.important ? 'make not important' : 'make important'
    return (
        <li className="note">{note.content} <button onClick={toggleImportance}>{label}</button></li>
    )
}

export default Note