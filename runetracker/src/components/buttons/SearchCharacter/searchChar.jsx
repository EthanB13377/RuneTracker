import React, { useState } from "react";
import "./searchChar.css";

const validate = (character_name) => {
    if (!character_name) {
        return true;
    } else if (character_name.length > 15) {
        return true;
    } else if (character_name.length <= 0) {
        return true;
    } 
    return false;
}

const HandleSubmit = (e, character, setError) => {
    e.preventDefault();
    setError(validate(character));
    console.log(character);

}

const SearchChar = () => {

    const [ error, setError ] = useState(null);
    const [ character, setCharacter ] = useState(null);

    return (
        <div>
            {error && (
                <div>Please double check your OSRS username</div>
            )}
            <input 
                type="text"
                placeholder="Enter your OSRS name" 
                className="character" 
                onChange={ (e) => { setCharacter(e.target.value) }}/>
            <input 
                type="submit"  
                text="Begin" 
                className="submit" 
                onClick={ (e) => { HandleSubmit(e, character, setError) }}/>
        </div>
    )
}

export default SearchChar;