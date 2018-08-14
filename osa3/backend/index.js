// Ottaa käyttöön Noden sisäänrakennetun web-palvelimen määrittelevän moduulin. Sama asia kuin import http from 'http'
// const http = require('http')

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
app.get('/notes', (req, res) => {
    res.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json' })
//     response.end(JSON.stringify(notes))
// })
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.end('Hello World')
// })

// Viimeiset rivit sitovat muuttujaan app sijoitetun http-palvelimen kuuntelemaan porttiin 3001 tulevia HTTP-pyyntöjä.
// const port = 3001
// app.listen(port)
// console.log(`Server running on port ${port}`)