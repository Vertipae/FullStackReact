const mongoose = require('mongoose')


const url = process.env.MONGODB_URI
mongoose.connect(url)

const Note = mongoose.model('Note', {
    content: String,
    date: Date,
    important: Boolean
})


// Muut moduulin sisällä määritellyt asiat, esim. muuttujat mongoose ja url eivät näy moduulin käyttäjälle.
module.exports = Note