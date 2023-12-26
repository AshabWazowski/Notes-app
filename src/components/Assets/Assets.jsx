import { useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  Modal,
  Fade,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  Divider,
  DialogActions,
} from "@mui/material";
// import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";

// This is the Home button for adding the Notes
export const AddNoteBtn = ({ handleClick }) => {
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
export const AddNoteDialog = ({ open, close, addNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddNote = () => {
    if (title !== "" && description !== "") {
      addNote(title, description);
    }
    setTitle("");
    setDescription("");
  };

  return (
    <Dialog open={open} onClose={close} fullWidth sx={{ textAlign: "center" }}>
      <DialogTitle>Notes Form</DialogTitle>
      <Divider>Add Note</Divider>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap="1.5rem" padding="1% 3%">
          <TextField
            variant="outlined"
            label="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Enter Title..."
          />
          <TextField
            variant="outlined"
            label="Description"
            multiline
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            rows={4}
            placeholder="Enter Description..."
          />
        </Box>
        <DialogActions>
          <Button onClick={handleAddNote}>Add</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
