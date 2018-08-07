import React from 'react'

const FilterPerson = ({ handleFind, findWith }) => {
    return (
        <div>
        Rajaa luetteloa: <input placeholder='Nimi'
                    value={findWith}
                    onChange={handleFind} />
                    </div>
    )
}

export default FilterPerson