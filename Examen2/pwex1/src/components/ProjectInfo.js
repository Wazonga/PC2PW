import React from 'react';
import 

const TextInput = (props) =>{
    return(
        <div className='container'>
            <label>{props.label}</label>
            <input type="Text"></input>
            <button>{props.buttonText}</button>
        </div>

    )
    console.log(props.label)
}
export default TextInput


const startdate = () =>{
return (
    <label for="start">Start date:</label>
    <input type="date" id="start" name="trip-start"
           value="2018-07-22"
           min="2018-01-01" max="2018-12-31"></input>
)
}
export default startdate

const enddate = () =>{
 
    return (
        <label for="start">End date:</label>
        <input type="date" id="start" name="trip-start"
               value="2018-07-22"
               min="2018-01-01" max="2018-12-31"></input>
    )
    }
    export default enddate
    


