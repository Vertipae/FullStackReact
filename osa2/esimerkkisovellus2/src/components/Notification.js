import React from 'react'

// Jos propsin message arvo on null ei renderöidä mitään, muussa tapauksessa renderöidään viesti div-elementtiin.
const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    return (
        // Elementille on liitetty tyylien lisäämistä varten luokka error.
        <div className="error">
            {message}
        </div>
    )
}
export default Notification
