import React, { useState } from 'react';
import { Button, TextField, Autocomplete, Typography, Container } from '@mui/material';

const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        alert(`You entered: ${inputValue}`);
    };

    return (
        <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
            Fill out this form to be matched with a mentor!
        </Typography>
        <Typography variant="h6" gutterBottom>Username</Typography>
        
        <TextField
            required
            label="Enter something"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="normal"
        />

        <Typography variant="h6" gutterBottom>Password</Typography>
        <TextField
            required
            label="Enter something"
            variant="outlined"
            sx={{
                backgroundColor: 'lightgray',
                borderRadius: '100px',

            }}
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="normal"
        />

        <Typography variant="h6" gutterBottom>Confirm password:</Typography>
        
        <TextField
            required
            label="Enter something"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="normal"
        />

        <Typography variant="h6" gutterBottom>Email address</Typography>
        
        <TextField
            required
            label="Enter something"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="normal"
        />

        <Typography variant="h6" gutterBottom>Phone number</Typography>
        
        <TextField
            required
            label="Enter something"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="normal"
        />

        <Typography variant="h6" gutterBottom>Zip code</Typography>
        
        <TextField
            required
            label="Enter something"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="normal"
        />

        <Typography variant="h6" gutterBottom>Mentor/mentee</Typography>
        
        <TextField
            required
            label="Enter something"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="normal"
        />

        //dropdown
        <Typography variant="h6" gutterBottom>Gender</Typography>
        
        <TextField
            required
            label="Enter something"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="normal"
        />

        <Typography variant="h6" gutterBottom>Interests</Typography>
        
        <TextField
            label="Enter something"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="normal"
        />

        <Typography variant="h6" gutterBottom>Food</Typography>
        
        <TextField
            label="Enter something"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="normal"
        />

        <Typography variant="h6" gutterBottom>Music</Typography>
        
        <TextField
            label="Enter something"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="normal"
        />

        <Typography variant="h6" gutterBottom>Shows</Typography>
        
        <TextField
            label="Enter something"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="normal"
        />

        <Typography variant="h6" gutterBottom>Hobbies</Typography>
        
        <TextField
            label="Enter something"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="normal"
        />


        <Typography variant="h6" gutterBottom>Careers</Typography>
        
        <TextField
            label="Enter something"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="normal"
        />
        
        <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
        >
            Submit
        </Button>
        </Container>
    );
};

export default Form;