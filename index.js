
// Backend
// Esimerkkisovellus 2 frontend
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(cors())
require('dotenv').config()

const Note = require('./models/note')



// Jos kannasta haettavilla olioilla olisi suuri määrä kenttiä, apufunktio formatNote kannattaisi muotoilla hieman geneerisemmässä muodossa
// const formatNote = (note) => {
// Ensimmäinen rivi luo uuden olion, mihin kopioituu kaikki vanhan olion kentät. Uuteen olioon lisätään myös kenttä id:
//     const formattedNote = { ...note._doc, id: note._id}
//     delete formattedNote._id
//     delete formattedNote.__V

//     return formattedNote
// }

// Apufunktio, jonka avulla yksittäinen muistiinpano saadaan muutettua mongon sisäisestä esitysmuodosta haluamaamme muotoon
const formatNote = (note) => {
    return {
        content: note.content,
        date: note.date,
        important: note.important,
        id: note._id
    }
}

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

app.post('/api/notes', (request, response) => {
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

// app.get('/api/notes', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })

// Palautetaan HTTP-pyynnön vastauksena funktion avulla muotoiltuja oliota

// Nyt siis muuttujassa notes on taulukollinen mongon palauttamia olioita. Kun suoritamme operaation notes.map(formatNote) seurauksena on uusi taulukko
app.get('/api/notes', (request, response) => {
    Note
        .find({})
        .then(notes => {
            response.json(notes.map(formatNote))
        })
})

// app.get('/api/notes', (req, res) => {
//     res.json(notes)
// })


// On myös mahdollista estää mongoosea palauttamasta tiettyjen kenttien arvoa, tai pyytää sitä palauttamaan vain tietyt kentät.
//  Saamme estettyä parametrin __v:n lisäämällä find-metodiin toiseksi parametriksi {__v: 0} seuraavasti:
// app.get('/api/notes', (request, response) => {
//     Note
//     .find({}, {__v: 0})
//     .then(notes => {
//         response.json(notes.map(formatNote))
//     })
// })

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

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// const PORT = 3001
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })


