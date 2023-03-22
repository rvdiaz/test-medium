import { alpha, Avatar, Box, Button, ClickAwayListener, Container, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { InputButton } from '../../Components/InputButton/InputButton'
import   { PaletteButton }   from '../../Components/PaletteButton/PaletteButton';
import {useSelector} from 'react-redux';

export const MainApp = () => {
    const [open, setopen] = useState(false);
    const disabled=useSelector(state=>state.uiDisabled.disabled);

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
                <InputButton 
                    open={open} 
                    setopen={setopen}
                />
                {open && 
                <IconButton
                    disableRipple
                   /*  disabled={disabled} */
                >
                    <Avatar 
                        sx={{
                           bgcolor: disabled ? alpha('#808080',0.3) : alpha('#808080',0.9)
                        }}
                        >
                            R
                    </Avatar>
                </IconButton>
                    }
                </Box>
                {open && <PaletteButton/>}
            </Box>
        </ClickAwayListener>  
    </Container>
  )
}
