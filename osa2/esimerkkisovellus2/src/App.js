import React from 'react'
import Note from './components/Note'

const App = ({ notes }) => {
    //const App = (props) => {
    // const { notes } = props;
    // const rivit = () => notes.map(note =>
    //     <li key={note.id}>
    //         {note.content}</li>)


    return (
        <div>
            <h1>Muistiinpanot</h1>
            <ul>
                {/* {rivit()} */}
                {/*  Key-attribuutti määritelty Note-komponenteille */}
                {notes.map(note => <Note key={note.id} note={note} />)}

            </ul>
        </div>
    )
}

export default App