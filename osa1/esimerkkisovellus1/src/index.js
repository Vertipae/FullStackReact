import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// Hello on komponentti, komponentin määrittelevällä funktiolla on nyt parametri props. Komponentti kirjoitetaan isolla eli Hello.
const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
            </div>
    )
}

// Funktio on kaikki sulkujen sisässä nuolen jälkeen
const App = () => {
    const nimi = 'Pekka';
    const ika = 10;
    {/*const now = new Date();
    const a = 10;
    const b = 20;
    */}
    console.log('Hello from komponentti');
    return (
    <div>
        <h1>Greetings</h1>
        {/* Propsit määritellään seuraavasti */}
        <Hello name="Arto" age={26 + 10}/>
        <Hello name={nimi} age={ika}/>
    {/* <p>Hello world, it is {now.toString()}</p>
        <p>{a} plus {b} is {a + b}</p>*/}
    </div>
)};

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
