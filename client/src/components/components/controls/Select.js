import React from 'react'
import {FormControl, InputLabel, MenuItem, Select as MuiSelect} from '@material-ui/core'

export default function Select (props) {

    const {name, label, value, onChange, options} = props

    return(
        <FormControl
        variant="outlined"
        >
            <InputLabel>{label}</InputLabel>
            <MuiSelect
            name = {name}
            value = {value}
            label = {label}
            onChange = {onChange}
            multiple = {false}
            >
                    <MenuItem value="">None</MenuItem>
                    {
                        options.map(
                            item => (<MenuItem key = {item.id} value = {item.id}> {item.name}</MenuItem>)
                        )
                    }
            </MuiSelect>
        </FormControl>
    )

}