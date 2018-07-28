import React from 'react'
import ReactDOM from 'react-dom'

// const Display = ({ counter }) => <div>{counter}</div>


// const Button = ({ handleClick, text }) => (
//     <button onClick={handleClick}>
//         {text}
//     </button>
// )

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vasen: 0,
            oikea: 0,
            kaikki: []

        }
    }
    klikVasen = () => {
        this.setState({
            vasen: this.state.vasen + 1,
            // Tilan kenttä kaikki saa arvokseen entisen tilan mihin on liitetty v metodilla concat, joka luo uuden taulukon
            kaikki: this.state.kaikki.concat('v')
        })
    }

    klikOikea = () => {
        this.setState({
            oikea: this.state.oikea + 1,
            kaikki: this.state.kaikki.concat('o')
        })
    }

    render() {
        // metodissa render on nyt apufunktio. Join metodilla muodostetaan taulukosta merkkijono, alkiot on erotettuina välilyönnillä
        const historia = () => this.state.kaikki.join(' ')
        return (
            <div>
                <div>
                    {this.state.vasen}
                    <button onClick={this.klikVasen}>vasen</button>
                    <button onClick={this.klikOikea}>oikea</button>
                    {this.state.oikea}
                    <div>{historia()}</div>
                </div>
            </div>
        )
    }

}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)




