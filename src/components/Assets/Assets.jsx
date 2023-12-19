import { useState } from "react";
import { Backdrop, Box, Button, Modal, Fade, Typography} from "@mui/material";
// import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";


// This is the Home button for adding the Notes
export const AddNoteBtn = ({handleClick}) => {
  return (
    <Box
      position="fixed"
      top="80%"
      right="10%"
      borderRadius="50px"
      backgroundColor="peru"
      boxShadow="0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
    >
      <Button
      onClick={handleClick}
        sx={{ color: "#0d0d0d", borderRadius: "50px", padding: "1rem 2rem" }}
      >
        <AddIcon />
      </Button>
    </Box>
  );
};


// This is the modal for Adding the Notes
export const AddNoteModal = ({open , close}) =>{

    return(
      
       <Modal 
       aria-labelledby="transition-modal-title"
       open={open}
       onClose={close}
        closeAfterTransition
        slots={{backdrop: Backdrop}}
        slotProps={{
            backdrop:{
                timeout: 500,
            }
        }}
       >
       <Fade in={open}>
       <Box
       position='absolute'
       top='50%'
       left='35%'
       transform='translate(-50%, 50%)'
       width='600px'
       bgcolor='whitesmoke'
       boxShadow={24}
       border='2px solid #000'
       p='24px'
       >
       <Typography>Hello This is a modal</Typography>
       </Box>
       </Fade>
       
       </Modal>
    )
}