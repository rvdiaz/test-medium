import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Box, InputAdornment, InputBase } from '@mui/material'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { disabledActions } from '../../Store/DisabledComponents/DisabledComponents';

export const InputButton = (props) => {
  const {open,setopen}=props;
  const [value, setvalue] = useState('');
  const dispatch=useDispatch();

  const handleOpen=()=>{
    if(!open){
        setopen(true);
    }
  }
  const handleChange=(e)=>{
    if(e.target.value!==''){
      dispatch(disabledActions.changeState(false));
    }
    else
      dispatch(disabledActions.changeState(true));
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
