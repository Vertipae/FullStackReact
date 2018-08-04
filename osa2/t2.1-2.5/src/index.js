import React from 'react';
import ReactDOM from 'react-dom';

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko kurssi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>
    )

}

const Otsikko = (props) => {
    return (

        <h1>{props.kurssi}</h1>
    )
}

const Sisalto = ({ osat }) => {
    return (
        <div>
            {osat.map(osa => <Osa key={osa.id} osa={osa} />)}
        </div>


    )
}

const Yhteensa = (props) => {
    let summa = 0;
    props.osat.forEach(osa => {
        summa += osa.tehtavia;
    });
    return (
        <div>

            <p>Yhteensä {summa}</p>

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

    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',

        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10,
                id: 1

            },

            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7,
                id: 2
            },

            {
                nimi: 'Komponenttien tila',
                tehtavia: 14,
                id: 3
            },

            {
                nimi: 'Redux',
                tehtavia: 7,
                id: 4
            }
        ]
    }


    return (
        <div>

            <Kurssi kurssi={kurssi} />

        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
