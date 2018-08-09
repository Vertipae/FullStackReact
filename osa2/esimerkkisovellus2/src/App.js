import React from 'react'
import Note from './components/Note'
import axios from 'axios'

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
            showAll: true
        }
        console.log('constructor')
    } // Lifecycle-metodi componentDidMount tulee renderin jälkeen
    componentDidMount() {
        console.log('did mount')
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                console.log('promise fulfilled')
                this.setState({ notes: response.data })
            })

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

                <div>
                    <button onClick={this.toggleVisible}>
                        näytä {label}
                    </button>
                </div>
                <ul>
                    {notesToShow.map(note => <Note key={note.id} note={note} />)}
                    {/* {this.state.notes.map(note => <Note key={note.id} note={note} />)} */}

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