import React from 'react';
import ReactDOM from 'react-dom';

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko kurssi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            {/* <Yhteensa osat={kurssi.osat} /> */}
        </div>
    )

}

const Otsikko = (props) => {
    return (

        <h1>{props.kurssi}</h1>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.osat[0]} />
            <Osa osa={props.osat[1]} />
            <Osa osa={props.osat[2]} />
        </div>


    )
}

// const Yhteensa = (props) => {
//     let summa = 0;
//     props.osat.forEach(osa => {
//         summa += osa.tehtavia;
//     });
//     return (
//         <div>

//             <p>Yhteensä {summa}</p>

//         </div>
//     )
// }

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
