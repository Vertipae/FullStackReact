import React from 'react'
import ReactDOM from 'react-dom'





class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 1
        }
    }

    render() {
        return (
            <div>
                <div>{this.state.counter}</div>
                {/* Jokainen napin painallus tulostaa konsoliin clicked */}
                {/* <button onClick={() => console.log('clicked')}> */}

                {/* Jokainen napin painallus kasvattaa laskuria */}
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
                    plus
                </button>
                {/* Napin painallus nollaa laskurin */}
                <button onClick={() => this.setState({ counter: 0 })}>
                    zero
                </button>
            </div>
        )
    }
}


// class App extends React.Component {
// constructor(props) {
// super(props)
// Tila sisältää kentän counter, jonka arvo on 1. Ei tulisi päivittää suoraan.
// this.state = {
// counter: 1
// }

// setInterval(() => {
// Tilan päivitys tapahtuu setState funktion avulla. Kutsutaan funktiota setState toistuvasti sekunnin välein korottaen laskurin arvoa aina yhdellä.
// this.setState({ counter: this.state.counter + 1})
// }, 1000)
// }

// render() {
// Konsolissa tulostetaan
// console.log('Renderöidään', this.state.counter)
// return (
// <div>{this.state.counter}</div>
// )
// }
// }

ReactDOM.render(
    <App />,
    document.getElementById('root')
)




