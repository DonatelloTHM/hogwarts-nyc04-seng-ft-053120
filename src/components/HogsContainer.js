import React from 'react'
import HogCard from './HogCard'

export default function HogsContainer(props) {

    const hogsCards = props.hogs.map((hog) => {
     return <HogCard hogName={hog.name} hogSpecialty={hog.specialty} hogGreased={hog.greased} hogWeight={hog.weight} hogMedal={hog['highest medal achieved']}/>
    })

    return (
        <div className="ui cards row centered">
            {hogsCards}
        </div>
    )
}
