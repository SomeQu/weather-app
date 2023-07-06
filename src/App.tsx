import React, { ChangeEvent, useEffect, useState } from 'react'
import WeatherModal from './modals/WeatherModal'
import './App.css'
import { optionType } from './types/types';
import axios from 'axios';
import useForecast from './hooks/useForecast';
import Forecast from './components/Forecast';



const App = (): JSX.Element=> {
  const { searchValue,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit} = useForecast()
  return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'500px', }}>
          {forecast ? <Forecast data ={forecast} /> : (
            <WeatherModal searchValue={searchValue} 
            options={options} 
            onInputChange={onInputChange} 
            onOptionSelect={onOptionSelect} 
            onSubmit={onSubmit} />
            )}
            
    </div>
      )}
      


export default App