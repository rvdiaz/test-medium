import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Box, InputAdornment, InputBase } from '@mui/material'
import React, { useState } from 'react'

export const InputButton = (props) => {
  const {open,setopen,setdisabled}=props;
  const [value, setvalue] = useState('');

  const handleOpen=()=>{
    if(!open){
        setopen(true);
    }
  }
  const handleChange=(e)=>{
    if(e.target.value!==''){
      setdisabled(false);
    }
    else
      setdisabled(true);

    setvalue(e.target.value);
  }

  return (
    <InputBase
        value={value}
        onChange={handleChange}
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
