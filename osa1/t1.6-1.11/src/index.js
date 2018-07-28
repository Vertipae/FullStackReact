import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

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
    hyva = () => () => { this.setState({ hyva: this.state.hyva + 1 }) }

    neutraali = () => () => { this.setState({ neutraali: this.state.neutraali + 1 }) }

    huono = () => () => { this.setState({ huono: this.state.huono + 1 }) }

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
                    <Button
                        handleClick={this.hyva()}
                        text="hyvä"
                    />
                    <Button
                        handleClick={this.neutraali()}
                        text="neutraali"
                    />
                    <Button
                        handleClick={this.huono()}
                        text="huono"
                    />
                </div>
            <h1>Statistiikka</h1>
            <div>
                <p>hyvä {this.state.hyva}</p>
                <p>neutraali {this.state.neutraali}</p>
                <p>huono {this.state.huono}</p>
                <p>keskiarvo {this.keskiarvo()}</p>
                <p>positiivisia {this.positiiviset()}</p>
            </div>
            </div>
        )
    }

}


ReactDOM.render(<App />, document.getElementById('root'));
