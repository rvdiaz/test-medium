import React from 'react'
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FormatColorResetOutlinedIcon from '@mui/icons-material/FormatColorResetOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import { Box, Button } from '@mui/material';
import {useSelector} from 'react-redux'

export const PaletteButton = (props) => {
    const disabled=useSelector(state=>state.uiDisabled.disabled);

  return (
    <Box
        sx={{
            border:'1px solid #F1F3F4',
            bgColor:'#FAFBFB',
            padding:'8px',
            width:'100%',
            display:'flex',
            justifyContent:'space-between'
        }}
    >
        <Box>
            <Button 
                disabled={disabled}
                variant="outlined" 
                startIcon={<OpenInFullOutlinedIcon/>}
                sx={{
                    margin:'0 15px 0 2px'
                }}
                >
                Abrir
            </Button>
            <Button  
                disabled={disabled}
                variant="outlined" 
                startIcon={<CalendarTodayOutlinedIcon />}
                sx={{
                    margin:'2px'
                }}
                >
                Hoy
            </Button>
            <Button 
                disabled={disabled}
                variant="outlined" 
                startIcon={<LockOpenOutlinedIcon />}
                sx={{
                    margin:'2px'
                }}
                >
                Publico
            </Button>
            <Button 
                disabled={disabled}
                variant="outlined" 
                startIcon={<OpenInFullOutlinedIcon />}
                sx={{
                    margin:'2px'
                }}
                >
                Ninguno
            </Button>
            <Button 
                disabled={disabled}
                variant="outlined" 
                startIcon={<FormatColorResetOutlinedIcon />}
                sx={{
                    margin:'2px'
                }}
                >
                Abrir
            </Button>
            <Button 
                disabled={disabled}
                variant="outlined" 
                startIcon={<AdjustOutlinedIcon />}
                sx={{
                    margin:'2px'
                }}
                >
                Estimacion
            </Button>
        </Box>
        <Box>
            <Button 
                variant="outlined" 
                sx={{
                    margin:'0 15px 0 2px'
                }}
                >
                Cancel
            </Button>
            <Button 
                variant="contained"  
                sx={{
                    margin:'0 15px 0 2px'
                }}
                >
                {disabled ? 'OK' : 'Agregar'}
            </Button>
        </Box>
    </Box>
  )
}
