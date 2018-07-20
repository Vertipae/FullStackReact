import React from 'react'
import ReactDOM from 'react-dom'


// Hello on komponentti, komponentin määrittelevällä funktiolla on nyt parametri props. Komponentti kirjoitetaan isolla eli Hello.
// const Hello = (props) => {
    // return (
        // <div>
            // <p>Hello {props.name}, you are {props.age} years old</p>
        // </div>
    // )
// }

// Funktio on kaikki sulkujen sisässä nuolen jälkeen


class App extends React.Component {
    constructor(props) {
        super(props)
        // Tila sisältää kentän counter, jonka arvo on 1. Ei tulisi päivittää suoraan.
        this.state = {
            counter: 1
        }

        setInterval(() => {
            // Tilan päivitys tapahtuu setState funktion avulla. Kutsutaan funktiota setState toistuvasti sekunnin välein korottaen laskurin arvoa aina yhdellä.
            this.setState({ counter: this.state.counter + 1})
        }, 1000)
    }

    render() {
        // Konsolissa tulostetaan
        console.log('Renderöidään', this.state.counter)
        return (
            <div>{this.state.counter}</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)


// const App = (props) => {
    // const { counter } = props

    // return (
        // <div>{counter.value}</div>
    // )
// };

// const counter = {
    // value: 1
// }

// const renderoi = () => {
    // ReactDOM.render(<App counter={counter} />, document.getElementById('root'))
// }

// setInterval(() => {
    // renderoi()
    // counter.value += 1
// },)

// renderoi()
// counter.value += 1
// renderoi()
// counter.value += 1
// renderoi()


