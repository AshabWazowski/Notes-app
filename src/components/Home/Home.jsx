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
  IconButton,
} from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { AddNoteBtn, AddNoteDialog } from "../Assets/Assets";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data , setData] = useState([]);
  const [bookmark, setBookmark] = useState(false);

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
    <MainBox padding='3% 6%'>
    
    <AddNoteBtn handleClick={handleOpen}/>
    <AddNoteDialog open={openModal} close={handleClose} addNote={handleNotes}/>
    <Grid container spacing={3}>
      {data.map((item, index)=>{
       return(
         <Grid item key={index}>
          <Card sx={{minWidth: '200px', maxWidth:'200px'}}>
            <CardHeader
            title={item.title}
            />
              <Divider/>
            <CardContent>
              <Typography>{item.description}</Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
            <IconButton>
            <EditNoteIcon/>
            </IconButton>
            {bookmark ? 
              <IconButton onClick={()=>setBookmark(false)}>
                <BookmarkIcon/>
              </IconButton>
              :
              <IconButton onClick={()=>setBookmark(true)}>
              <BookmarkBorderIcon/>
              </IconButton>

            }
            </CardActions>
          </Card>
          </Grid>
       )
      })}
    </Grid>
    </MainBox>
  );
};

export default Home;
