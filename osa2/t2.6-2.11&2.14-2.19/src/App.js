import React from 'react'
import Person from './components/Person'
import AddPerson from './components/AddPerson'
import FilterPerson from './components/FilterPerson'
import axios from 'axios'
import personService from './services/persons'
import Notification from './components/Notification'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                // { name: 'Arto Hellas', id: 0 },
                // { name: 'Sallamaarit Jaako', id: 1 }
            ],
            newName: '',
            newNumber: '',
            findWith: '',
            error: null
        }

    }
    componentDidMount() {
        personService
            .getAll()
            .then(response => {
                this.setState({ persons: response })

            })
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

    deletePerson = (id, name) => {
        if (window.confirm(`Poistetaanko ${name} listalta`)) {
            personService
                .destroy(id)
                .then(response => {
                    this.setState({
                        persons: this.state.persons.filter(person => person.id !== id),
                        error: `${name} poistettu onnistuneesti`
                    })
                    setTimeout(() => {
                        this.setState({ error: null })
                    }, 3000)
                })
        }
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

        let isOldPerson = function (element) {
            return element.name.toUpperCase() === personObject.name.toUpperCase()
        }
        // some funktio palauttaa true, jos ehto käy toteen millä tahansa alkiolla
        // if (this.state.persons.some(oldPerson => oldPerson.name === personObject.name)) 
        if (this.state.persons.some(isOldPerson)) {
            // alert('Henkilö on jo luettelossa')
            if (window.confirm(`${personObject.name} on jo luettelossa, korvataanko numero uudella?`)) {
                const hArray = this.state.persons.filter(p => p.name.toUpperCase() === personObject.name.toUpperCase())
                const pUpdate = hArray[0]
                personService
                    .update(pUpdate.id, personObject)
                    .then(updatedPerson => {
                        const persons = this.state.persons.filter(p => p.id !== updatedPerson.id)
                        this.setState({
                            persons: persons.concat(updatedPerson),
                            newName: '',
                            newNumber: '',
                            error: `${updatedPerson.name} päivitetty onnistuneesti`
                        })
                        setTimeout(() => {
                            this.setState({ error: null })
                        }, 3000)
                    })
            }
        } else {

            personService
                .create(personObject)
                .then(newPerson => {
                    this.setState({
                        persons: this.state.persons.concat(newPerson),
                        newName: '',
                        newNumber: '',
                        error: `${newPerson.name} luotu onnistuneesti`

                    })
                    setTimeout(() => {
                        this.setState({ error: null })
                    }, 3000)
                })
        }
    }

    render() {


        const personsToShow =
            this.state.findWith.length === 0 ? this.state.persons : this.state.persons.filter(person => person.name.toUpperCase().includes(this.state.findWith.toUpperCase()))

        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <Notification message={this.state.error} />
                {/* Omat komponentit FilterPerson ja Addperson */}
                <FilterPerson handleFind={this.handleFind} findWith={this.findWith} />
                <AddPerson state={this.state} addPerson={this.addPerson} handlePersonChange={this.handlePersonChange} handleNumberChange={this.handleNumberChange} />
                <h2>Numerot</h2>
                <ul>
                    {/* Listaa henkilöt listalta */}
                    {personsToShow.map(person => <Person key={person.id} person={person} deletePerson={this.deletePerson} />)}


                </ul>
            </div>
        )
    }
}

export default App