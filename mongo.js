const mongoose = require('mongoose')

// EI oo mun, esimerkki
// const url = 'mongodb://fullstack:sekred@ds211088.mlab.com:11088/fullstack-notes'

const url = process.env.MONGODB_URI
mongoose.connect(url)

// Mongoosen dokumentaatiossa skeema ja sitä vastaava model määritellään kumpikin erikseen
const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

// const Note = mongoose.model('Note', {
// content: String,
// date: Date,
// important: Boolean
// })

const note = new Note({
    content: 'HTML on helppoa',
    date: new Date(),
    important: true
})
// Sovellus luo muistiinpanoa vastaavan model:in avulla muistiinpano-olion
const note = new Note({
    content: 'Selain pystyy suorittamaan vain javascriptiä',
    date: new Date(),
    important: false
})

note
    .save()
    .then(response => {
        console.log('note saved')
        mongoose.connection.close()
    })