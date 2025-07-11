import { useState } from 'react';
import './Dictionary.css';
import axios from 'axios';

export default function Dictionary () {
    let [keyword, setKeyword] = useState ("");
   
    function handleResponse (response) {
        console.log (response.data[0]);
    }
    function search (event) {
        event.preventDefault();

        let apiKey = "303634af30at1e0bobd77c2b1f682f81"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

        axios.get(apiUrl).then(handleResponse);
    }
    
function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

    return <div className="Dictionary"> 
    <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange}>
        </input></form> </div>;

}