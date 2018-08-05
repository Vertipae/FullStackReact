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

const Yhteensa = ({ osat }) => {
    // let summa = 0;
    // props.osat.forEach(osa => {
    //     summa += osa.tehtavia;
    // });

    let totalTehtavia = osat.reduce((yht, osa) => yht + osa.tehtavia, 0)
    return (
        <div>

            <p>Yhteensä {totalTehtavia}</p>

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

    const kurssit = [
        {
            nimi: 'Half Stack -sovelluskehitys',
            id: 1,
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
        },
        {
            nimi: 'Node.js',
            id: 2,
            osat: [
                {
                    nimi: 'Routing',
                    tehtavia: 3,
                    id: 1
                },
                {
                    nimi: 'Middlewaret',
                    tehtavia: 7,
                    id: 2
                }
            ]
        }
    ]


    return (
        <div>
            <h1>Opetusohjelma</h1>
            {/* <Kurssi kurssi={kurssi} /> */}
            {kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi} />)}

        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
