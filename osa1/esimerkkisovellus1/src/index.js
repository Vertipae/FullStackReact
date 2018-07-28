import React from 'react'
import ReactDOM from 'react-dom'

const Display = ({ counter }) => <div>{counter}</div>


const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

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
                {/* Muutettiin laskurin arvon näyttäminen omaan komponenttiin */}
                <Display counter={this.state.counter} />
                <div>
                    <Button
                        handleClick={this.asetaArvoon(this.state.counter + 1)}
                        text="plus"
                    />
                    <Button
                        handleClick={this.asetaArvoon(this.state.counter - 1)}
                        text="minus" />
                    <Button
                        handleClick={this.asetaArvoon(0)}
                        text="zero"
                    />
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




