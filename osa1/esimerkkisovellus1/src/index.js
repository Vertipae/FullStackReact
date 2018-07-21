import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 1

        }
    }
    // Metodi sisältää vain yhden komennon, eli returnin niin hyödynnetään nuolifunktion tiiviimpää muotoa "kaksi nuolta sisältävä funktio"
    asetaArvoon = (arvo) => () => this.setState({ counter: arvo })

    // Pidempi muoto
    // asetaArvoon = (arvo) => {
    //     return () => {
    //         this.setState({ counter: arvo })
    //     }

    // }

    render() {
        return (
            <div>
                <div>{this.state.counter}</div>
                <div>
                    <button onClick={this.asetaArvoon(this.state.counter + 1)}>
                        plus
                    </button>
                    <button onClick={this.asetaArvoon(0)}>
                        zero
                    </button>
                </div>
            </div>
        )
    }

}


// Bindi konstruktorissa class properties -ominaisuudella
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             counter: 1
//         }

//         this.kasvataYhdella = this.kasvataYhdella.bind(this)
//         this.nollaa = this.nollaa.bind(this)
//     }
//     kasvataYhdella = () => {
//         this.setState((prevState) => ({
//             counter: prevState.counter + 1
//         }))
//     }

//     nollaa = () => {
//         this.setState({ counter: 0 })
//     }


//     render() {
//         return (
//             <div>
//                 <div>{this.state.counter}</div>
//                 <div>
//                     {/* Viitataan metodeihin ilman bindiä */}
//                     <button onClick={this.kasvataYhdella}>
//                         plus
//                 </button>
//                     <button onClick={this.nollaa}>
//                         nollaa
//                 </button>
//                 </div>
//             </div>
//         )
//     }
// }

ReactDOM.render(
    <App />,
    document.getElementById('root')
)




