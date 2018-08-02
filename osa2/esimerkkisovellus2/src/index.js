import React from 'react';
import ReactDOM from 'react-dom';



const notes = [
    {
        id: 1,
        content: 'HTML on helppoa',
        date: '2017-12-10T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Selain pystyy suorittamaan vain javascriptiä',
        date: '2017-12-10T18:39:34.091Z',
        important: false
    },
    {
        id: 3,
        content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
        date: '2017-12-10T19:20:14.298Z',
        important: true
    }
]

const App = (props) => {
    const { notes } = props;
    // Notes alkiosta map saa komennon parametrin funktio note => note.id avulla
    const rivit = () => notes.map(note =>
        <li key={note.id}>
            {note.content}</li>)

    //  const result = notes.map(note =>  note.content )
    //  console.log(result)

    return (
        <div>
            <h1>Muistiinpanot</h1>
            <ul>
                {rivit()}

                {/* <li>{notes[0].content}</li>
                <li>{notes[1].content}</li>
                <li>{notes[2].content}</li> */}
            </ul>
        </div>
    )
}

ReactDOM.render(<App notes={notes} />, document.getElementById('root'));

