import React, { useState } from 'react';
import { Button, TextField} from '@mui/material';
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

    const goToMentor = () => {
        navigate('/mentor'); // Navigate to the mentor page
    };
    
    const handleClick = async (useremail, userpassword) => {
      console.log("TEST");
      /*
      axios.post('http://localhost:2500/users/login', body).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });*/

      const response = await axios.post(
        'http://localhost:2500/users/login',
        { email: useremail, password: userpassword },
        { headers: {'Content-Type': 'application/json'}}
      )
      console.log(response.data);
    }  
    async function doClick(useremail, userpassword) {
      const response = await axios.post('http://localhost:2500/users/login', {
        email: useremail, password: userpassword }, {headers: {'Content-Type': 'application/json'}}
      )
      //console.log(response.data);
      Cookies.set('userID', response.data);
      navigate('/mentor');
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
            className='bg-white text-orange-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-orange-200 transition duration-300' 
            onClick={(e) => {doClick(email, password);}}>

            Submit
        </Button>
        
      </Box>
    );
};

export default Login;