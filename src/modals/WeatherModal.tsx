import { Container } from '@mui/material'
import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { optionType } from '../types/types';
import { Props } from '../types/types';


const WeatherModal = ({searchValue,
                        options,
                        onInputChange, 
                        onOptionSelect,
                        onSubmit}:Props):JSX.Element => {

  return (
   <div style={{display:'flex',
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'#cfd8dc',}}>
    <Container
    style={{}}
    sx={{display:'flex',
    flexDirection:'column',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',}}
     maxWidth="sm">
        <p>
        Weather search
        </p>
        <input type="text" 
        value={searchValue}
        style={{ borderRadius:'10px',
        border:'1px solid black',
        padding:'§0px 100px'}}
        onChange={onInputChange} />
        <button onClick={onSubmit}>Search</button>
        {options.map((option: optionType)=>
        (<button onClick={()=>onOptionSelect(option)}>{option.name},{option.country}</button>))}

    </Container>
    
   </div>
  )
}

export default WeatherModal