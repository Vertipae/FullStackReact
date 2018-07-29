import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)
// Destruktoitu
const Statistics = ({ state, keskiarvo, positiiviset }) => {
    if (state.hyva + state.huono + state.neutraali === 0) {
        return (
            <div>
                <h1>Statistiikka</h1>
                <p>ei yhtään palautetta annettu</p>
            </div>
        )
    }
    return (
        <div>

            <h1>Statistiikka</h1>
            <table>
                <tbody>
                    <Statistic text={'hyvä '} action={state.hyva} />
                    <Statistic text={'neutraali '} action={state.neutraali} />
                    <Statistic text={'huono '} action={state.huono} />
                    <Statistic text={'keskiarvo '} action={keskiarvo()} />
                    <Statistic text={'positiivisia '} action={positiiviset()} />
                </tbody>
            </table>
        </div>
    )
}

const Statistic = ({ text, action }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{action}</td>
        </tr>
    )
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }
    // Lisää hyvä - tilan arvoa yhdellä
    // hyva = () => () => { this.setState({ hyva: this.state.hyva + 1 }) }

    // neutraali = () => () => { this.setState({ neutraali: this.state.neutraali + 1 }) }

    // huono = () => () => { this.setState({ huono: this.state.huono + 1 }) }

    annaPalaute = (palaute) => {
        if (palaute === "hyva") {
            return () => {
                this.setState({
                    hyva: this.state.hyva + 1

                })
            }
        } else if (palaute === "neutraali") {
            return () => {
                this.setState({
                    neutraali: this.state.neutraali + 1
                })
            }
        } else {
            return () => {
                this.setState({
                    huono: this.state.huono + 1
                })
            }
        }

    }

    keskiarvo = () => {
        const yht = this.state.hyva + (this.state.huono * -1)
        const maara = this.state.hyva + this.state.huono + this.state.neutraali
        return yht / maara
    }

    positiiviset = () => {
        return (this.state.hyva / (this.state.huono + this.state.neutraali + this.state.hyva)) * 100 + "%"
    }

    render() {
        return (
            <div>
                <h1>Ystävällisesti antaisitko palautetta?</h1>
                <div>
                    {/* <Button
                        handleClick={this.hyva()}
                        text="hyvä"
                    /> */}
                    <Button
                        handleClick={this.annaPalaute("hyva")}
                        text="Hyvä"
                    />
                    <Button
                        handleClick={this.annaPalaute("neutraali")}
                        text="Neutraali"
                    />
                    <Button
                        handleClick={this.annaPalaute("huono")}
                        text="Huono"
                    />
                </div>
                <Statistics
                    state={this.state}
                    keskiarvo={() => this.keskiarvo()}
                    positiiviset={() => this.positiiviset()} />
            </div>
        )
    }

}


ReactDOM.render(<App />, document.getElementById('root'));
