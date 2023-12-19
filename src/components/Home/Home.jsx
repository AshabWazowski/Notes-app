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
} from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import { AddNoteBtn, AddNoteModal } from "../Assets/Assets";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);



  const handleOpen = () =>{
    setOpenModal(true)
  }
  const handleClose = () =>{
    setOpenModal(false);
  }


  

  return (
    <MainBox padding='3% 6%' border='2px solid black'>
    
    <AddNoteBtn handleClick={handleOpen}/>
    <AddNoteModal open={openModal} close={handleClose}/>
    </MainBox>
  );
};

export default Home;
