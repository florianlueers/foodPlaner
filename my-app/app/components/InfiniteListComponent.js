"use client"


import { useState } from "react"
import { Button, TextField } from '@mui/material';


export default function InfiniteListComponent() {

    // Liste an Items
    const [listOfItems, setListOfItems] = useState([])
    const [textInput, setTextInput] = useState("")


    const addCurrentInputToList = () => {
        setListOfItems(prev => [...prev, textInput])
        setTextInput("")
    }

    return (
        <>
            {/* Zunächst alle Items auflisten */}
            <ol>
                {listOfItems.map((item, index) => (
                    <li key={index}> • {item}</li>
                ))}
            
                <li>
                    <Button onClick={addCurrentInputToList}>+</Button>
                    <TextField variant="standard" value={textInput} onChange={text => setTextInput(text.target.value)} />
                </li>
            </ol>

            
        </>
    )
}