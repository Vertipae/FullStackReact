import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return (

        <p>{props.kurssi}</p>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.osa} tehtavia={props.tehtavia} />
        </div>


    )
}

const Yhteensa = (props) => {
    return (
        <div>

            <p>{props.yht}</p>

        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osa.nimi} {props.osa.tehtavia}</p>

        </div>
    )
}

const App = () => {
    // Kurssi ei ole olio, vaan osat on
    const kurssi = 'Half Stack -sovelluskehitys';
    // Aikasemmin osa1 oli itsessään reactin perusteet, mutta nyt siihen liittyy nimi ja tehtavamaara

    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10

    }

    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    }

    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }


    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osa={osa1} />
            <Sisalto osa={osa2} />
            <Sisalto osa={osa3} />
            <Yhteensa yht={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
