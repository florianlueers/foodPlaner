"use client"


import { useState } from "react"
import { MenuItem, Select } from "@mui/material"


export default function DropdownMenu () {

    let availableOptions = [{label: "vegan", icon: "🌱"}, {label: "vegetarisch", icon: "🥛"}, {label: "fleisch", icon: "🥩"} ]
    const [selectedOption, setSelectedOption] = useState(0)

    
    const handleChange = (item) => {
        setSelectedOption(item.target.value)
    }

    return (
        <>
            {selectedOption === 0 ? (availableOptions[0].icon) : selectedOption === 1 ? (availableOptions[1].icon) : (availableOptions[2].icon)}

            <Select
                size="small"
                defaultValue={0}
                variant="standard"
                onChange={handleChange}
                sx={{ ml: 1, my: 0.5 }}
            >
                {availableOptions.map((item, index) => (
                    <MenuItem key={index} value={index}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </>
    )
}