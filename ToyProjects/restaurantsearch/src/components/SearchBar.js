import { Container, InputAdornment, TextField } from "@mui/material";
import Button from "@mui/material/Button"
import SearchIcon from "@mui/icons-material/Search"
import { useState } from "react";

function SearchBar(props) {
    // State
    const [searchTerm, setSearchTerm] = useState("");

    // Event
    const onSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const onSearchEnterKeyPress = (event) => {
        if (event.key === "Enter") {
            props.onSearchClick(event, searchTerm);
        }
    }

    return (
        <Container 
            maxWidth="xl" 
            sx={{ 
                mt: 4, 
                display: "flex", 
                flexDirection: "row", 
                justifyContent: "end" 
                }}>
            <TextField
                type="search"
                label="Search"
                value={searchTerm}
                onChange={onSearchChange}
                onKeyDown={onSearchEnterKeyPress}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}/>
            <Button variant="contained" sx={{ ml: 2 }} onClick={(e) => {props.onSearchClick(e, searchTerm)}}>검색</Button>
        </Container>
    );
}

export default SearchBar;