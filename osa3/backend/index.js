

// Ottaa käyttöön Noden sisäänrakennetun web-palvelimen määrittelevän moduulin. Sama asia kuin import http from 'http'


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
// Määritellään sovellukselle kaksi routea. Näistä ensimmäinen määrittelee tapahtumankäsittelijän, joka hoitaa sovelluksen juureen eli polkuun / tulevia HTTP GET -pyyntöjä
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
// Routeista toinen määrittelee tapahtumankäsittelijän, joka hoitaa sovelluksen polkuun notes tulevia HTTP GET -pyyntöjä
// Pyyntöön vastataan response-olion metodilla json, joka lähettää HTTP-pyynnön vastaukseksi parametrina olevaa Javascript-olioa (eli taulukkoa notes) vastaavan JSON-muotoisen merkkijonon. 
app.get('/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    // const id = request.params.id
    // console.log(id)
    const note = notes.find(note => note.id === id)
    // console.log(note)
    if (note) {
        response.json(note)
    } else {
        // Metodin status lisäksi metodia end ilmoittamaan siitä, että pyyntöön tulee vastata ilman dataa
        response.status(404).end()
    }
    // const note = notes.find(note => {
    // console.log(note.id, typeof note.id, id, typeof id, note.id === id)
    // })
    // console.log(note)
    // response.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


