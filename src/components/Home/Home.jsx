import React, { useState } from "react";
import { MainBox } from "../Assets/MainBox";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  Button,
  Grid,
  CardHeader,
} from "@mui/material";
import { AddNoteBtn, AddNoteDialog } from "../Assets/Assets";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data , setData] = useState([]);


  const handleOpen = () =>{
    setOpenModal(true)
  }
  const handleClose = () =>{
    setOpenModal(false);
  }

  const handleNotes = (title, description) => {
      setData([...data, {title, description}]);
    handleClose();
  }


  
console.log(data);
  return (
    <MainBox padding='3% 6%' border='2px solid black'>
    
    <AddNoteBtn handleClick={handleOpen}/>
    <AddNoteDialog open={openModal} close={handleClose} addNote={handleNotes}/>
    <Grid container spacing={3}>
      {data.map((item, index)=>{
       return(
         <Grid item key={index}>
          <Card>
            <CardHeader
            title={item.title}
            />
              
            <CardContent>
              <Typography>{item.description}</Typography>
            </CardContent>
          </Card>
          </Grid>
       )
      })}
    </Grid>
    </MainBox>
  );
};

export default Home;
