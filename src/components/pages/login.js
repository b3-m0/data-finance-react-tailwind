import React, { useState } from 'react';
import { Button, TextField} from '@mui/material';
import axios from 'axios';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate } from 'react-router-dom';




const Login = () => {
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');

    const navigate = useNavigate();  // Define navigate using useNavigate

    const goToMentor = () => {
        navigate('/mentor'); // Navigate to the mentor page
    };
    
    const handleClick = () => {
        var body = {
          email: email,
          password: password
        };
        
        axios.post('http://localhost:2500', body).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });

        
      }  
    
    return (
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1 } }}
        noValidate
        autoComplete="off"
      >
        <div>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Email Address</InputLabel>
          <Input 
            id="component-simple" 
            placeholder="janedoe@gmail.com"
            value={email} // Value from state
            onChange={(e) => getEmail(e.target.value)} // Update state on change
          />
        </FormControl>
        </div>

        <div>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Password</InputLabel>
          <Input 
            id="component-simple" 
            placeholder="sunRise123!"
            value={password} // Value from state
            onChange={(e) => getPassword(e.target.value)} // Update state on change
          />
        </FormControl>
        </div>

        <Button
            variant="contained"
            color="primary"
            //onClick={handleClick}
            className='bg-white text-orange-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-orange-200 transition duration-300' 
            onClick={goToMentor}>

            Submit
        </Button>
        
      </Box>
    );
};

export default Login;