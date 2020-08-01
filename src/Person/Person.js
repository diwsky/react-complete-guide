import React from 'react'
import './Person.css'

const person = (props) => {

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a person, my name is {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}></input>
        </div>
    )
}

export default person;