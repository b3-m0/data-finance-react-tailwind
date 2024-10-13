import React, { useState } from 'react';
import { Button, Typography, Container, Autocomplete, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



const interestsOptions = [
    'Technology',
    'Art',
    'Sports',
    'Music',
    'Reading',
    'Travel',
    'Coding',
    'Cooking',
    'Photography',
    'Writing',
    'Fitness',
    'Movies',
    'Gaming',
    'Science',
    'Fashion',
    'Gardening',
    'Hiking',
    'Dancing',
    'Crafting',
    'Yoga',
    'Meditation',
    'Volunteering',
    'Cycling',
    'Fishing',
    'Swimming',
    'Skating',
    'Chess',
    'Board Games',
    'Martial Arts',
    'Investing',
    'Blogging',
    'Podcasting',
    'Social Media',
    'Public Speaking',
    'Self-Improvement',
    'Languages',
    'History',
    'Environmentalism',
    'Politics',
    'Community Service',
    'Entrepreneurship',
    'Robotics',
    'Astronomy',
    'Space Exploration',
    'Animal Care',
    'Automotive',
    'Home Improvement',
    'Interior Design',
    'Decorating',
    'Health and Wellness',
    'Diet and Nutrition',
    'Mental Health Awareness',
    'Parenting',
    'Pet Care',
    'Makeup and Beauty',
    'Travel Blogging',
    'Nature Conservation',
    'Startups',
    'Nonprofit Work',
    'Education',
    'Performing Arts',
    'Magic Tricks',
    'Collecting (Coins, Stamps, Cards)',
    'Video Editing',
    'Film Making',
    'Virtual Reality',
    'Augmented Reality',
    '3D Printing',
    'Artificial Intelligence',
    'Machine Learning',
    'Web Development',
    'Data Science',
    'Cloud Computing',
    'Cybersecurity',
    'Graphic Design',
    'UX/UI Design',
    'Marketing',
    'Advertising',
    'E-Commerce',
    'Event Planning',
    'Real Estate',
    'Public Relations',
    'Baking',
    'Veganism',
    'Sustainability',
];



const Form = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [role, setRole] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [yourName, setName] = useState('');
    const [interests, setInterests] = useState([]);
    const handleChange = (event) => {
      setGender(event.target.value);
    };
    const handleChangeRole = (event) => {
      setRole(event.target.value);
    }

    const handleClick = () => {
        const body = {
            email: email,
            password: password,
            name: yourName,
            phone: phoneNumber,
            zipcode: zipCode,
            role: role,
            age: age,
            interests: interests,
        };

        axios.post('http://localhost:2500', body).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    };



    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(to right, #ffa500, #ff7b79)',
                padding: '2rem',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
            }}
        >
            <Container
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'white',
                    borderRadius: '12px',
                    padding: '2rem',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                }}
            >
                <Typography variant="h4" gutterBottom align="center">
                    Sign Up Form
                </Typography>

                <Box
                    component="form"
                    sx={{ width: '100%', mt: 3 }}
                    noValidate
                    autoComplete="off"
                >
                    <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
                        <InputLabel htmlFor="name">First and Last Name</InputLabel>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            value={yourName}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input
                            id="email"
                            placeholder="Enter your email here..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
                        <InputLabel htmlFor="phone">Phone Number</InputLabel>
                        <Input
                            id="phone"
                            placeholder="Phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </FormControl>

                    <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
                        <InputLabel htmlFor="zipCode">Zip Code</InputLabel>
                        <Input
                            id="zipCode"
                            placeholder="Zip Code"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{mb: 2}}>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="Role"
                      onChange={handleChangeRole}
                    >
                      <MenuItem value={"Mentor"}>Mentor</MenuItem>
                      <MenuItem value={"Mentee"}>Mentee</MenuItem>
                    </Select>
                  </FormControl>

                    {/* Dropdown menu for Gender */}
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={gender}
                      label="Gender"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Nonbinary"}>Nonbinary</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  </FormControl>

                    <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
                        <InputLabel htmlFor="age">Age</InputLabel>
                        <Input
                            id="age"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </FormControl>

                    {/* Dropdown menu for Interests */}
                    <Autocomplete
                        multiple
                        options={interestsOptions}
                        getOptionLabel={(option) => option}
                        value={interests}
                        onChange={(event, newValue) => setInterests(newValue)}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Interests"
                                placeholder="Select interests"
                                fullWidth
                            />
                        )}
                        sx={{ mb: 2 }}
                    />

                    <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            aria-describedby="password-helper-text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormHelperText id="password-helper-text">
                            A combination of uppercase letters, lowercase letters, numbers, and symbols.
                        </FormHelperText>
                    </FormControl>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                        fullWidth
                        sx={{ mt: 2, padding: '12px 0', fontSize: '16px' }}
                    >
                        Submit
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Form;