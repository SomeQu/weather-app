import React, { ChangeEvent, useEffect, useState } from 'react'
import { forecastType, optionType } from '../types/types';
import axios, { AxiosResponse } from 'axios';

const useForecast = () => {
  
    const [searchValue, setSearchValue] = useState<string>('');
    const [options, setOptions] = useState<[]>([]);
    const [city, setCity] = useState<optionType | null>(null);
    const [forecast, setForecast] = useState< null | forecastType>(null)
    const API_KEY = '7817f630fe94dbf6c345bdd4b1d4ff66'
    const getSearchResults = async (val:string) =>{
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${val.trim()}&limit=4&appid=${API_KEY}
        `)
        .then(res=> res.json()
        .then(data => setOptions(data)))
    }
    const onInputChange = (e:ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value.trim()
        setSearchValue(value)
        if(value ==='') return
        getSearchResults(value)
    }
    const getForecast = (option:optionType) =>{
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${option.lat}&lon=${option.lon}&appid=${API_KEY}`)
        .then((data)=>{

            const forecastData:any = {
                ...data.data.city as {},
                list: data.data.list.slice(0,16)
                
            }
            setForecast(forecastData)
            console.log(forecastData)
            })
        .catch((error)=>console.log(error))
    }
    const onOptionSelect = (option:optionType) =>{
        setCity(option)
    }
    const onSubmit = () =>{
        if(!city) return
        getForecast(city)
    }
    useEffect(()=>{
        if(city){
            setSearchValue(city.name)
            setOptions([])
          }
          console.log(city)
    },[city])
    return {
        searchValue,
        options,
        forecast,
        onInputChange,
        onOptionSelect,
        onSubmit
    }
}

export default useForecast