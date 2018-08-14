
// Heti alussa otetaan käyttöön express, joka on tällä kertaa funktio, jota kutsumalla luodaan muuttujaan app sijoitettava express-sovellusta vastaava olio
const express = require('express')
const app = express()

let notes = [
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

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    // console.log(id)
    const note = notes.find(note => note.id === id)
    // console.log(note)
    if (note) {
        response.json(note)
    } else {
        // Metodin status lisäksi metodia end ilmoittamaan siitä, että pyyntöön tulee vastata ilman dataa
        response.status(404).end()
    }

})

app.delete('/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


