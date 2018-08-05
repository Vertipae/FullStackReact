import React from 'react'

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

export default Kurssi