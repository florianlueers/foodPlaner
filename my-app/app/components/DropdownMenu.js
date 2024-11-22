"use client"


import { useState } from "react"
import { MenuItem, Select } from "@mui/material"


export default function DropdownMenu () {

    let availableOptions = [{label: "vegan", icon: "🌱"}, {label: "vegetarisch", icon: "🥛"}, {label: "fleisch", icon: "🥩"} ]
    const [selectedOption, setSelectedOption] = useState(0)


    const handleChange = (event) => {
        setSelectedOption(event.target.value)
    }

    return (
        <>
            {availableOptions[selectedOption].icon}

            <Select
                size="small"
                defaultValue={selectedOption}
                variant="standard"
                onChange={handleChange}
                sx={{ ml: 1, my: 0.5 }}
            >
                {availableOptions.map((item, index) => (
                    <MenuItem key={item.label} value={index}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </>
    )
}