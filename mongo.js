// Ei tarvita ennää tätä pätkää koodista

const mongoose = require('mongoose')
require('dotenv').config()

// EI oo mun, esimerkki
// const url = 'mongodb://fullstack:sekred@ds211088.mlab.com:11088/fullstack-notes'
console.log(process.env.MONGODB_URI)
const url = process.env.MONGODB_URI
mongoose.connect(url)

// Mongoosen dokumentaatiossa skeema ja sitä vastaava model määritellään kumpikin erikseen
const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema)
// Oliot haetaan kannasta Note-modelin metodilla find. Metodin parametrina on hakuehto. Koska hakuehtona on tyhjä olio {}, saimme kannasta kaikki notes-kokoelmaan talletetut oliot.
Note
    .find({})
    .then(result => {
        result.forEach(note => {
            console.log(note)
        })
        mongoose.connection.close()
    })

// const Note = mongoose.model('Note', {
// content: String,
// date: Date,
// important: Boolean
// })

// const note = new Note({
//     content: 'HTML on helppoa',
//     date: new Date(),
//     important: true
// })
// // Sovellus luo muistiinpanoa vastaavan model:in avulla muistiinpano-olion
// const note = new Note({
//     content: 'Selain pystyy suorittamaan vain javascriptiä',
//     date: new Date(),
//     important: false
// })

// note
//     .save()
//     .then(response => {
//         console.log('note saved')
//         mongoose.connection.close()
//     })