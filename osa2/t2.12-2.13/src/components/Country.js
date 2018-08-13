import React from 'react'

const Country = ({ countries, setHandler }) => {
    // Jos vain 1 maa pätee filtteröintiin näytetään sen tiedot
    if (countries.length === 1) {
        const country = countries[0]
        return (
            <div>
                <h2>{country.name} {country.nativeName}</h2>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <img src={country.flag} alt='no flag to show' height="70" />
            </div>
        )
    }
// Jos kaikki maat pätevät filtteröintiin eli filtteri on tyhjä, ei näytetä mitään
    if (countries.length === 250) {
        return <div></div>
    }
// Jos yli tai yhtäkuin 10 maata pätee filtteröintiin niin kehoitetaan alla olevaa
    if (countries.length >= 10) {
        return <p> Too many matches, specify another filter </p>
    }
    return (
        //  Jos alle 10 mutta enemmän kuin 1 maata täyttävät filtteröinnin listataan niiden nimet
        countries.map((country) => <div key={country.name}>{country.name} </div>)

    )
}

export default Country