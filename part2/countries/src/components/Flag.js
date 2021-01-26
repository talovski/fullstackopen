import React from 'react'

const Flag = ({ country }) => {
    return (
        <div>
            <img
                src={country.flag}
                alt="flag"
                height="150"
                width="250">
            </img>
        </div>
    )
}

export default Flag