import { Temperature, forecastProps, forecastType } from '../types/types'


const Forecast = ({data}:forecastProps): JSX.Element => {
    const todayTemperature: number = data.list[0].main.temp
    const celsius: number = Math.round(todayTemperature - 273)
    const fahrenheit: number = Math.round(( todayTemperature - 273.15) * 1.8+32)
    const maxTemp : Temperature= {
        celsius : Math.round(data.list[0].main.temp_max -273),
        fahrenheit: Math.round((data.list[0].main.temp_max -273.15) *1.8+32)
    }
    const minTemp: Temperature ={
        celsius : Math.round(data.list[0].main.temp_min -273),
        fahrenheit: Math.round((data.list[0].main.temp_min -273.15) *1.8+32)
    }
    const description = data.list[0].weather[0].description
    console.log(description)
  return (
    <div style={{display:'flex',
    flexDirection:'column', gap:'30px',
    justifyContent:'center',
    alignItems:'center'}}>
        <div style={{fontSize:'24px'}}>
        {data.name}, {data.country}
        </div>
        <div>
       <div style={{display:'flex', justifyContent:'space-between'}}>
        <div>
        {celsius}°C
        </div>
        <div>
        {fahrenheit}°F
        </div>
        </div>
        {description}
        </div>
        <div>
            <div>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Forecast