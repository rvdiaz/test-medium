import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Box, InputAdornment, InputBase } from '@mui/material'
import React from 'react'

export const InputButton = (props) => {
  const {open,setopen}=props;
  const handleOpen=()=>{
    if(!open){
        setopen(true);
    }
  }
  return (
    <InputBase
        onClick={handleOpen}
        multiline
        fullWidth
        readOnly={open ? false : true}
        placeholder='Escriba para agregar nueva tarea'
        startAdornment={
            <InputAdornment 
                position="start"
                sx={{
                    height:'auto'
                }}
                >
              <AddBoxOutlinedIcon 
              sx={{
                color:'#007FFF'
              }}
              />
            </InputAdornment>
          }
        sx={
        open 
        ? 
            {
                alignItems:'start'
            }
        :
            {
            cursor:'pointer',
            textarea: {cursor:'pointer'},
            alignItems:'start' 
            }
    }
    />
  )
}
