import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

function ListName () {
    const [newListName, setNewListName] = useState('');
    const dispatch = useDispatch(); // Most commonly missed
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New name: ', newListName);
        const action = {type: "SET_LIST_NAME", payload: newListName};
        dispatch(action);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={newListName} onChange={(e) => setNewListName(e.target.value)}/>
            <button type="submit">Save</button>
        </form>
    )
}

export default ListName;