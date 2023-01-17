import React, {useState} from 'react';

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);
    const handleClick = () => {
        setAge(age + 1);
    }
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick = {handleClick}>Birthday Button for {props.name}</button>
        </div>
    )
}

export default PersonCard