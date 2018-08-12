import React from 'react'
import Note from './components/Note'
import axios from 'axios'
import noteService from './services/notes'
import Notification from './components/Notification'


// const App = ({ notes }) => {

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             notes: props.notes,
//             newNote: 'muistiinpano',
//             showAll: true
//         }
//     }
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            newNote: '',
            showAll: true,
            error: 'something went wrong..'
        }
        console.log('constructor')
    } // Lifecycle-metodi componentDidMount tulee renderin jälkeen
    componentDidMount() {
        noteService
            .getAll()
            .then(response => {
                this.setState({ notes: response })
            })
        // console.log('did mount')
        // axios
        //     .get('http://localhost:3001/notes')
        //     .then(response => {
        //         console.log('promise fulfilled')
        //         this.setState({ notes: response.data })
        //     }
        // )

        // koodin voi myös kirjoittaa seuraavasti, jossa muuttujaan eventHandler on sijoitettu viite funktioon
        // const eventHandler = (response) => {
        //     console.log('promise fulfilled')
        //     this.setState({ notes: response.data })
        // }
        // const promise = axios.get('http://localhost:3001/notes')
        // promise.then(eventHandler)
    }

    handleNoteChange = (event) => {
        console.log(event.target.value)
        this.setState({ newNote: event.target.value })
    }

    addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: this.state.newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            // id: this.state.notes.length + 1

        }
        noteService
            .create(noteObject)
            // .then(response => {
            .then(newNote => {
                this.setState({
                    // notes: this.state.notes.concat(response),
                    notes: this.state.notes.concat(newNote),
                    newNote: ''
                })
            })

        axios.post('http://localhost:3001/notes', noteObject)
            .then(response => {
                this.setState({
                    notes: this.state.notes.concat(response.data),
                    newNote: ''
                })
                // console.log(response)
            })

        // const notes = this.state.notes.concat(noteObject)

        // this.setState({
        //     notes,
        //     newNote: ''
        // })
        // console.log('nappia painettu')
        // console.log(event.target)
    }
    toggleImportanceOf = (id) => {
        return () => {
            // Ensimmäinen rivi määrittelee jokaiselle muistiinpanolle id-kenttään perustuvan yksilöivän url:in.
            const url = `http://localhost:3001/notes/${id}`
            // Taulukon metodilla find etsitään muutettava muistiinpano ja talletetaan muuttujaan note viite siihen.
            const note = this.state.notes.find(n => n.id === id)
            // Sen jälkeen luodaan uusi olio, jonka sisältö on sama kuin vanhan olion sisältö poislukien kenttä important.
            const changedNote = { ...note, important: !note.important }
            // Takaisinkutsufunktiossa asetetaan komponentin App tilaan kaikki vanhat muistiinpanot paitsi muuttuneen, josta tilaan asetetaan palvelimen palauttama versio

            noteService
                .update(id, changedNote)
                // .then(response => {
                .then(changedNote => {
                    //  this.setState({
                    //  notes: this.state.notes.map(note => note.id !== id ? note : response.data)
                    const notes = this.state.notes.filter(n => n.id !== id)
                    this.setState({
                        notes: notes.concat(changedNote)
                    })
                })
                .catch(error => {
                    this.setState({
                        error: `muistiinpano '${note.content}' on jo valitettavasti poistettu palvelimelta`,
                        notes: this.state.notes.filter(n => n.id !== id)
                    })
                    // Ajastin, joka asettaa 5 sekunnin kuluttua tilan error-kentän arvoksi null
                    setTimeout(() => {
                        this.setState({ error: null })
                    }, 5000)
                    // alert(`muistiinpano '${note.content}' on jo valitettavasti poistettu palvelimelta`)
                    // Metodi filter poistaa olemattoman muistiinpanon
                    // this.setState({ notes: this.state.notes.filter(n => n.id !== id) })
                })
            // axios
            //     .put(url, changedNote)
            //     .then(response => {
            //         this.setState({
            //             // Jokainen uuden taulukon alkio luodaan ehdollisesti siten, että jos ehto note.id !== id on tosi, otetaan uuteen taulukkoon suoraan vanhan taulukon kyseinen alkio.
            //             //  Jos ehto on epätosi, eli kyseessä on muutettu muistiinpano, otetaan uuteen taulukkoon palvelimen palauttama olio.
            //             notes: this.state.notes.map(note => note.id !== id ? note : response.data)
            //         })
            //     })
            // console.log('importance of ' + id + ' need to be toggled')
            // console.log(`importance of ${id} needs to be toggled`)
        }
    }

    toggleVisible = () => {
        this.setState({ showAll: !this.state.showAll })
    }
    render() {
        console.log('render')
        const notesToShow =
            this.state.showAll ?
                this.state.notes :
                this.state.notes.filter(note => note.important)
        // this.state.notes.filter(note => note.important === true)

        const label = this.state.showAll ? 'vain tärkeät' : 'kaikki'

        return (
            <div>
                <h1>Muistiinpanot</h1>
                <Notification message={this.state.error} />
                <div>
                    <button onClick={this.toggleVisible}>
                        näytä {label}
                    </button>
                </div>
                <ul>
                    {/* Jokaisen muistiinpanon tapahtumankäsittelijä on nyt yksilöllinen, sillä se sisältää muistiinpanon id:n. toggleImportanceOf ei itsessään ole tapahtumankäsittelijä  */}
                    {notesToShow.map(note => <Note key={note.id} note={note} toggleImportance={this.toggleImportanceOf(note.id)} />)}

                </ul>
                <form onSubmit={this.addNote}>
                    <input
                        value={this.state.newNote}
                        onChange={this.handleNoteChange} />
                    <button type="submit">Tallenna</button>
                </form>
            </div>
        )

    }

}



export default App