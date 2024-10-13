import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Mentor = () => {
    const mentorArray = [
        {
            "id": 1,
            "name": "Tyler",
            "hobbies": "cooking,reading,coding",
            "food": "pasta,noodles",
            "music": "nothing",
            "tvshows": "squidgame,breakingbad",
            "interests": "everything",
            "careers": "lawyer",
            "distance": 0
        },
        {
            "id": 0,
            "name": "Edward",
            "hobbies": "coding,hiking",
            "food": "noodles",
            "music": "everything",
            "tvshows": "sherlock,squidgame",
            "interests": "nothing",
            "careers": "lawyer,firefighter",
            "distance": 150.66613222386255
        },
        {
            "id": 2,
            "name": "Bethany",
            "hobbies": "coding,ceramics",
            "food": "tea,cake",
            "music": "music",
            "tvshows": "breakingbad,sherlock",
            "interests": "nothing",
            "careers": "vet",
            "distance": 104.38623147779435
        },
        {
            "id": 3,
            "name": "Neeraj",
            "hobbies": "music,linguistics,architecture,coding",
            "food": "chicken",
            "music": "music",
            "tvshows": "none",
            "interests": "everything",
            "careers": "engineer",
            "distance": 3827.311296108618
        }
    ];


    return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Mentor Name</TableCell>
                    <TableCell align="right">Hobbies</TableCell>
                    <TableCell align="right">Food</TableCell>
                    <TableCell align="right">Music</TableCell>
                    <TableCell align="right">TV Shows</TableCell>
                    <TableCell align="right">Interests</TableCell>
                    <TableCell align="right">Careers</TableCell>
                    <TableCell align="right">Distance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mentorArray.map((mentor) => (
                    <TableRow
                        key={mentor.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        {mentor.name}
                        </TableCell>
                        <TableCell align="right">{mentor.hobbies}</TableCell>
                        <TableCell align="right">{mentor.food}</TableCell>
                        <TableCell align="right">{mentor.music}</TableCell>
                        <TableCell align="right">{mentor.tvshows}</TableCell>
                        <TableCell align="right">{mentor.interests}</TableCell>
                        <TableCell align="right">{mentor.careers}</TableCell>
                        <TableCell align="right">{mentor.distance}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
 

        

    );
};

export default Mentor;