import React, { useState } from 'react';
import { Button, Typography, Container, TextField} from '@mui/material';
import axios from 'axios';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';



const Login = () => {
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');

    const navigate = useNavigate();  // Define navigate using useNavigate
    
    async function doClick(useremail, userpassword) {
      const response = await axios.post('http://localhost:2500/users/login', {
        email: useremail, password: userpassword }, {headers: {'Content-Type': 'application/json'}}
      )
      console.log(response.data);
      Cookies.set('userID', response.data);
      navigate('/mentor');
    } 
    
    /*
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
            className='bg-white text-orange-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-orange-200 transition duration-300' 
            onClick={(e) => {doClick(email, password);}}>

            Submit
        </Button>
        
      </Box>
    );
    */

    return (
      <Container
          maxWidth="sm"
          sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
              backgroundColor: 'white', // Set the entire background to white
              padding: '2rem',
          }}
      >
          <Box
              component="form"
              sx={{
                  width: '100%',
                  backgroundColor: 'white', // White background for the form
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
              noValidate
              autoComplete="off"
          >
          <Typography variant="h4" gutterBottom align="center">
              Login
          </Typography>

          <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                  id="email"
                  placeholder="janedoe@gmail.com"
                  value={email}
                  onChange={(e) => getEmail(e.target.value)}
              />
          </FormControl>

          <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => getPassword(e.target.value)}
              />
          </FormControl>

          <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                  mt: 2,
                  padding: '12px 0',
                  fontSize: '16px',
                  backgroundColor: '#ff7b79',
                  '&:hover': { backgroundColor: '#ff6b69' },
              }}
              onClick={(e) => {doClick(email, password);}}>

              Submit
          </Button>
        </Box>
      </Container>
    );
        
};

export default Login;