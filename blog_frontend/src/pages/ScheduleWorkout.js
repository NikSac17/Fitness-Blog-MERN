import React from 'react'
import Notes from './Notes'

const ScheduleWorkout = ({showAlert}) => {
    return (
        <div className="container">
            <Notes showAlert={showAlert}/>
        </div>
    )
}

export default ScheduleWorkout
