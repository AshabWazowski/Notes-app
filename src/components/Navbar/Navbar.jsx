import React, { useState } from 'react';
import '../style.css';
import { FormControl, IconButton, InputBase, Select, Typography, useMediaQuery, MenuItem, Divider, Box} from '@mui/material';
import { FlexBox } from '../Assets/MainBox';
import SearchIcon from '@mui/icons-material/Search';
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarsIcon from '@mui/icons-material/Stars';


const fullName = "Haider Abidi"

const Navbar = () => {
 
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  const [mobileMenuToggle , setMobileMenuToggle] = useState(false);
  const [mode , setMode] = useState(false);




  return (
  <FlexBox padding='1rem 6%' backgroundColor='#e4e5f3'>
    <FlexBox gap='1.5rem'>
        <Typography fontWeight='bold' 
        fontSize='2rem'
        className='logo'
        onClick={()=>alert("hello")}
        >
        NoteNest
        </Typography>

        {/*  Here we will handle the responsive design
          if it is Desktop then only show the Search bar  */}
        {isNonMobileScreen && (
          <FlexBox
          borderRadius='9px'
          gap='3rem'
          padding='0.1rem 1.5rem'
          border='1px solid black'
          >

          <InputBase placeholder='Search by Title...'/>
          <IconButton>
          <SearchIcon/>
          </IconButton>

          </FlexBox>
        )}

        </FlexBox>

        {/* DESKTOP NAVBAR */}

        {isNonMobileScreen ? (
          <FlexBox gap="1.5rem">
                <IconButton onClick={()=>setMode(!mode)}>
                    {mode ? (
                      <DarkMode sx={{color:'whitesmoke'}}/>
                    ):
                  <LightMode/>
                  }
                </IconButton>

                <IconButton>
                {mode ? 
                  <CalendarMonthIcon sx={{color:'whitesmoke'}}/>
                :
                <CalendarMonthIcon/>
              }
                </IconButton>

                <FormControl variant='standard' value={fullName}>
                <Select
                value={fullName}
                sx={{
                  backgroundColor:'peru',
                  width:'150px',
                  borderRadius:'0.25rem',
                  p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: 'plum',
                },
                }}
                input={<InputBase />}
                >
                <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={()=> alert("Bookmark")}><BookmarkIcon sx={{paddingRight:'5px'}}/>Bookmark</MenuItem>
                <MenuItem onClick={()=> alert("Premium")}><StarsIcon sx={{paddingRight:'5px'}}/>Premium</MenuItem>
                <MenuItem onClick={()=> alert("Logout")}><LogoutIcon sx={{paddingRight:'5px'}}/>Log Out</MenuItem>
                </Select>

                </FormControl>

          </FlexBox>

        )
        :
        (
            <IconButton onClick={()=>setMobileMenuToggle(!mobileMenuToggle)}>
            <MenuIcon sx={{color:'rgb(50, 50, 50)'}}/>
            </IconButton>
        )}



        {/*MOBILE MENU NAVBAR */}

        {!isNonMobileScreen && mobileMenuToggle && (
          <Box 
          position='fixed'
          top='0'
          right='0'
          height='100%'
          maxWidth='500px'
          minWidth='300px'
          zIndex='10'
          backgroundColor='#e4e5f3'
          boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2)'
          >
          <Box display='flex' justifyContent='flex-end' alignItems='center' padding='1.2rem'>
          <IconButton onClick={()=>setMobileMenuToggle(!mobileMenuToggle)}>
            <CloseIcon sx={{color:'rgb(50, 50, 50)'}}/>
          </IconButton>
          
          </Box>

          <FlexBox display='flex' flexDirection='column' gap='1.5rem'>
         
          <IconButton onClick={()=>setMode(!mode)}>
                    {mode ? (
                      <DarkMode sx={{color:'whitesmoke'}}/>
                    ):
                  <LightMode/>
                  }
                </IconButton>

                <IconButton>
                {mode ? 
                  <CalendarMonthIcon sx={{color:'whitesmoke'}}/>
                :
                <CalendarMonthIcon/>
              }
                </IconButton>

                <FormControl variant='standard' value={fullName}>
                <Select
                value={fullName}
                sx={{
                  backgroundColor:'peru',
                  width:'150px',
                  borderRadius:'0.25rem',
                  p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: 'plum',
                },
                }}
                input={<InputBase />}
                >
                <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={()=> alert("Bookmark")}><BookmarkIcon sx={{paddingRight:'5px'}}/>Bookmark</MenuItem>
                <MenuItem onClick={()=> alert("Premium")}><StarsIcon sx={{paddingRight:'5px'}}/>Premium</MenuItem>
                <MenuItem onClick={()=> alert("Logout")}><LogoutIcon sx={{paddingRight:'5px'}}/>Log Out</MenuItem>
                </Select>

                </FormControl>
          </FlexBox>
          
          </Box>
        )}


        </FlexBox>
      
  )
}

export default Navbar
