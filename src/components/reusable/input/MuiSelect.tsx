import React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

// Define the type for the options
interface Option {
    value: string;
    label: string;
}

// Define the type for the props
interface SelectProps {
    selectProviders?: Option[];
    selectText: string;
    MuiCss: string;
    MuiBg: string;
    value: string;              // Add value prop to handle the selected value
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;  // Add onChange prop
}

const Select: React.FC<SelectProps> = ({
    selectProviders = [],
    selectText,
    MuiCss,
    MuiBg,
    value,
    onChange
}) => {
    return (
        <div className={`w-full my-3 ${MuiCss}`}>
            <TextField
                id='filled'
                select
                label={selectText}
                fullWidth
                value={value} // Bind the value prop to TextField
                onChange={onChange} // Attach the onChange handler
                sx={{
                    '& .MuiInputBase-root': {
                        backgroundColor: MuiBg, // Directly set background color
                        borderRadius: '4px', // Optional: Add border radius
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none', // Remove outline border
                    },
                    '& .MuiInputLabel-root': {
                        color: '#6B7280', // Set label color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#8046F2', // Set label color when focused
                    },
                    '& .MuiSelect-select': {
                        padding: '15px', // Optional: Adjust padding inside the select
                    }
                }}
            >
                {selectProviders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    );
};

export default Select;