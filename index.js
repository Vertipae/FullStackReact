
// Heti alussa otetaan käyttöön express, joka on tällä kertaa funktio, jota kutsumalla luodaan muuttujaan app sijoitettava express-sovellusta vastaava olio
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(cors())


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

const logger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path: ', request.path)
    console.log('Body: ', request.body)
    console.log('---')
    next()
}

app.use(logger)

const generateId = () => {
    const maxId = notes.length > 0 ? notes.map(n => n.id).sort().reverse()[0] : 1
    return maxId + 1
}

app.post('/notes', (request, response) => {
    const body = request.body
    // Jos kenttä content puuttuu, vastataan statuskoodilla 400 bad request
    // Returnin kutsuminen on tärkeää, jos sitä ei tapahdu, jatkaa koodi suoritusta metodin loppuun asti ja virheellinen muistiinpano tallettuu tietokantaan
    if (body.content === undefined) {
        return Response.status(400).json({ error: 'Content missing' })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId()
    }

    notes = notes.concat(note)

    response.json(note)
})


// app.post('/notes', (request, response) => {
//     const note = request.body
//     console.log(note)

//     response.json(note)
// })

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/notes', (req, res) => {
    res.json(notes)
})

const error = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(error)


// Yksittäisen resurssin haku
// app.get('/notes/:id', (request, response) => {
//     const id = Number(request.params.id)
//     // console.log(id)
//     const note = notes.find(note => note.id === id)
//     // console.log(note)
//     if (note) {
//         response.json(note)
//     } else {
//         // Metodin status lisäksi metodia end ilmoittamaan siitä, että pyyntöön tulee vastata ilman dataa
//         response.status(404).end()
//     }

// })

// app.delete('/notes/:id', (request, response) => {
//     const id = Number(request.params.id)
//     notes = notes.filter(note => note.id !== id)

//     response.status(204).end()
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// const PORT = 3001
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })


