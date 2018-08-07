import React from 'react'
import Person from './components/Person'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas', id: 0 },
                { name: 'Sallamaarit Jaako', id: 1 }
            ],
            newName: '',
            newNumber: '',
            findWith: ''
        }
    }
    // Muuttaa tilaa, jotta näyttö päivittyy kun kenttään kirjoitetaan
    handlePersonChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        this.setState({ newNumber: event.target.value })
    }

    handleFind = (event) => {
        this.setState({ findWith: event.target.value })
    }
    // Luo uuden henkilö olion ja lisää sen listalle
    // Prevent estää oletusarvoisen toiminnan eli lähetyksen serverille
    addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: this.state.newName,
            number: this.state.newNumber,
            id: this.state.persons.length + 1

        }
        // some funktio palauttaa true, jos ehto käy toteen millä tahansa alkiolla
        if (this.state.persons.some(oldPerson => oldPerson.name === personObject.name)) {
            alert('Henkilö on jo luettelossa')
        } else {

            // Lisää listalle 
            const persons = this.state.persons.concat(personObject)
            // Vaihda tilaan uusi lista henkilöitä ja nollaa kenttä
            this.setState({
                persons,
                newName: '',
                newNumber: ''
            })
        }
    }

    render() {


        const personsToShow =
            this.state.findWith.length === 0 ? this.state.persons : this.state.persons.filter(person => person.name.toUpperCase().includes(this.state.findWith.toUpperCase()))

        return (
            <div>
                <h2>Puhelinluettelo</h2>
                Rajaa luetteloa: <input placeholdet='Nimi'
                    value={this.findWith}
                    onChange={this.handleFind} />
                <form onSubmit={this.addPerson}>
                    <div>
                        Nimi: <input
                            value={this.state.newName}
                            placeholder='Nimi'
                            onChange={this.handlePersonChange} />
                    </div>
                    <div>
                        Numero: <input value={this.state.newNumber}
                            placeholder='Numero'
                            onChange={this.handleNumberChange} />
                    </div>

                    <div>
                        <button type="submit">Lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <ul>
                    {/* Listaa henkilöt listalta */}
                    {personsToShow.map(person => <Person key={person.id} person={person} />)}


                </ul>
            </div>
        )
    }
}

export default App