import React from 'react'
import ReactDOM from 'react-dom'
// import Note from './components/Note'
import App from './App'
import axios from 'axios'

axios.get('http://localhost:3001/notes').then(response => {
    const notes = response.data
    ReactDOM.render(
        <App notes={notes} />,
        document.getElementById('root')
    )
})

// axios
//     .get('http://localhost:3001/notes')
//     .then(response => {
//         const notes = response.data
//         console.log(notes)
//     })



const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)



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




// ReactDOM.render(<App notes={notes} />, document.getElementById('root'));

