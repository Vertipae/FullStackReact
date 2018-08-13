import React from 'react'
import countryService from './services/countries'
import Country from './components/Country'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            newFilter: ''

        }
    }

    componentWillMount() {
        countryService
            .getAll()
            .then(response => {
                // console.log(response)
                this.setState({ countries: response })
            })
    }

    handleFilterChange = ({ target: { name, value } }) => {
        // console.log(event.target.value)
        // this.setState({ newFilter: event.target.value })
        this.setState({ newFilter: value })
    }
    render() {
        // console.log(this.state.countries)
        const countriesToShow =
            this.state.newFilter.length === 0 ? this.state.countries : this.state.countries.filter(country => country.name.toUpperCase().includes(this.state.newFilter.toUpperCase()))
        return (

            <div>
                find countries: <input
                    value={this.state.newFilter}
                    onChange={this.handleFilterChange} />
                <Country countries={countriesToShow} setHandler={this.setHandler} />
            </div>



        )
    }

}

export default App