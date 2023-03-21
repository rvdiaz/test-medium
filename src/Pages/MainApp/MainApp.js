import { Avatar, Box, ClickAwayListener, Container } from '@mui/material'
import React, { useState } from 'react'
import { InputButton } from '../../Components/InputButton/InputButton'
import   { PaletteButton }   from '../../Components/PaletteButton/PaletteButton';

export const MainApp = () => {
    const [open, setopen] = useState(false);

    const handleOpenToggle=()=>{
        setopen(false);
    }

  return (
    <Container 
        maxWidth='lg'
        sx={{
            margin:'5vh auto'
        }}
        >
        <ClickAwayListener onClickAway={handleOpenToggle}>
            <Box>
                <Box
                 sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    border:open ? '1px solid #F1F3F4' : '1px solid transparent',
                    padding:'8px',
                    width:'100%'
                }}
                >
                <InputButton open={open} setopen={setopen}/>
                {open && <Avatar>N</Avatar>}
                </Box>
                {open && <PaletteButton/>}
            </Box>
        </ClickAwayListener>  
    </Container>
  )
}
