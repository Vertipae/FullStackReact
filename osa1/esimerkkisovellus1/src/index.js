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
        this.setState({ counter: this.state.counter + 1})
    }
    // kasvataYhdella() {
    //     this.setState({ counter: this.state.counter + 1 })
    // }

    nollaa = () => {
        this.setState({ counter: 0})
    }

    // nollaa() {
    //     this.setState({counter: 0})
    // }
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



// Bindin tekeminen tapa 1

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             counter: 1
//         }
//     }

//     kasvataYhdella() {
//         this.setState({ counter: this.state.counter + 1 })
//     }

//     nollaa() {
//         this.setState({ counter: 0 })
//     }

//     render() {
//         return (
//             <div>
//                 <div>{this.state.counter}</div>
//                 <div>
//                     {/* Ei toimi this näin koska this ei enää viittaa komponenttiin App vaan on arvoltaan undefined. Virhe korjataan käyttäen bindiä */}
//                     {/* <button onClick={this.kasvataYhdella}> */}

//                     {/* Bindaamisella muodostetaan uusi funktio, jonka koodi on alkuperäisen funktion koodi */}
//                     <button onClick={this.kasvataYhdella.bind(this)}>
//                         plus
//                     </button>
//                     <button onClick={this.nollaa.bind(this)}>
//                         zero
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }



// class App extends React.Component {
// constructor() {
// super()
// this.state = {
// counter: 1
// }
// }

// render() {
// return (
// <div>
// <div>{this.state.counter}</div>
// {/* Jokainen napin painallus tulostaa konsoliin clicked */ }
// {/* <button onClick={() => console.log('clicked')}> */ }

// {/* Jokainen napin painallus kasvattaa laskuria */ }
// <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
// plus
// </button>
// {/* Napin painallus nollaa laskurin */ }
// <button onClick={() => this.setState({ counter: 0 })}>
// zero
// </button>
// </div>
// )
// }
// }



ReactDOM.render(
    <App />,
    document.getElementById('root')
)




