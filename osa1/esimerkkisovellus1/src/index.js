import React from 'react'
import ReactDOM from 'react-dom'


// Bindi konstruktorissa class properties -ominaisuudella
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 1
        }

        this.kasvataYhdella = this.kasvataYhdella.bind(this)
        this.nollaa = this.nollaa.bind(this)
    }
    kasvataYhdella = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }))
    }


    // setState kutsut eivät välttämättä tapahdu siinä järjestyksessä missä ne on kirjoitettu koodiin
    // kasvataYhdella = () => {
    //     this.setState({ counter: this.state.counter + 1 })
    // }


    nollaa = () => {
        // React kutsuu funktiota setState asynkroonisesti, joten molemmat rivit tulostavat saman arvon sillä Reactin tila ei saa uutta arvoa heti komennon this.setState jälkeen
        console.log(this.state.counter)
        this.setState({ counter: 0 })
        console.log(this.state.counter)
    }


    render() {
        return (
            <div>
                <div>{this.state.counter}</div>
                <div>
                    {/* Viitataan metodeihin ilman bindiä */}
                    <button onClick={this.kasvataYhdella}>
                        plus
                </button>
                    <button onClick={this.nollaa}>
                        nollaa
                </button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)




