import { useEffect, useState } from 'react'
import axios from 'axios';

import './MainCon.css'
import Searchbar from './Searchbar/Searchbar'
import MainInfo from './MainInfo/MainInfo'
import TimeForecast from './TimeForecast/TimeForecast'
import AirCondition from './AirConditions/AirCondition'

function MainCon() {

    const [data, setData] = useState({
        celcius: 0,
        name: 'Your City',
        humidity: 0,
        feelLike: 0,
        pressure: 0,
        speed: 0,
        visibility: 0,
        chance_of_rain: 0,
        image: ''

    })
    const [foredata, setForeData] = useState({
        celcius_first: 0,
        celcius_second: 0,
        celcius_third: 0,
        celcius_fourth: 0,
        celcius_fifth: 0,
        celcius_sixth: 0,
        images_list: ['','','','','',''],
        week_temp: [0,0,0,0,0,0,0],
        week_img_list: ['','','','','',''],
        weather_des: ['','','','','','']
    })
    const [name, setName] = useState('');
  
    const makeChange = (event) => {
        setName(event.target.value);
    }
    const enterKey = (event) => {
        if(event.charCode == 13) {
            handleClick();
        }
    }
    const handleClick = () => {
        if (name !== "") {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=915054739831c4eb4b5e2916792c1ab4&units=metric`;
            const apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=915054739831c4eb4b5e2916792c1ab4&units=metric`;
            axios.get(apiUrl)
            .then(res => {
                let imagePath = '';
                if(res.data.weather[0].main == "Clouds"){
                    imagePath = "/cloudy.png"
                } else if (res.data.weather[0].main == "Clear"){
                    imagePath = "/sunny.png"
                } else if (res.data.weather[0].main == "Rain"){
                    imagePath = "/rainy.png"
                } else if (res.data.weather[0].main == "Drizzle"){
                    imagePath = "/drizzy.png.png"
                } else if (res.data.weather[0].main == "Mist"){
                    imagePath = "/cloudy-day.png"
                } else {
                    imagePath = "/stormy.png"
                }
                setData({...data, celcius: res.data.main.temp,
                name: res.data.name, humidity: res.data.main.humidity,
                feelLike: res.data.main.feels_like, pressure: res.data.main.pressure,
                speed: res.data.wind.speed, visibility: res.data.visibility,
                image: imagePath
    })
        })
            .catch( err => console.log(err));

            axios.get(apiForecastUrl)
            .then(cast => {
                console.log(cast)
                let new_img_list = foredata.images_list.map((paths, i) => {
                    if(cast.data.list[i + 2].weather[0].main == "Clouds"){
                        return "/cloudy.png"
                    } else if (cast.data.list[i + 2].weather[0].main == "Clear"){
                        return "/sunny.png"
                    } else if (cast.data.list[i + 2].weather[0].main == "Rain"){
                        return "/rainy.png"
                    } else if (cast.data.list[i + 2].weather[0].main == "Drizzle"){
                        return "/drizzy.png"
                    } else if (cast.data.list[i + 2].weather[0].main == "Mist"){
                        return "/cloudy-day.png"
                    } else {
                        return "/stormy.png"
                    } 
                }) 
                let new_week_temp = foredata.week_temp.map((val, num) => {
                    return cast.data.list[4 * (2(num) + 1)].main.temp
                })
                let new_week_img_list = foredata.week_img_list.map((link, index) => {
                    if(cast.data.list[4 * (2(index) + 1)].weather[0].main == "Clouds"){
                        return "/cloudy.png"
                    } else if (cast.data.list[4 * (2(index) + 1)].weather[0].main == "Clear"){
                        return "/sunny.png"
                    } else if (cast.data.list[4 * (2(index) + 1)].weather[0].main == "Rain"){
                        return "/rainy.png"
                    } else if (cast.data.list[4 * (2(index) + 1)].weather[0].main == "Drizzle"){
                        return "/drizzy.png"
                    } else if (cast.data.list[4 * (2(index) + 1)].weather[0].main == "Mist"){
                        return "/cloudy-day.png"
                    } else {
                        return "/stormy.png"
                    }  
                })
                let new_weather_des = foredata.weather_des.map((wea, a) => {
                    return cast.data.list[4 * (2(a) + 1)].weather[0].main
                })
                setForeData({...foredata, celcius_first: cast.data.list[2].main.temp,
                celcius_second: cast.data.list[3].main.temp,
                celcius_third: cast.data.list[4].main.temp,
                celcius_fourth: cast.data.list[5].main.temp,
                celcius_fifth: cast.data.list[6].main.temp,
                celcius_sixth: cast.data.list[7].main.temp,
                images_list: new_img_list,
                week_temp: new_week_temp,
                week_img_list: new_week_img_list,
                weather_des: new_weather_des
            })
            .catch( err => console.log(err));
            })
        }
    }

    
   
    

    return (
      <div className="main">
        < Searchbar onSearchChange={makeChange} setChange={handleClick} checkEnter={enterKey}/>
        < MainInfo city={data.name} temperature={data.celcius} picture={data.image} />
        < TimeForecast first={foredata.celcius_first} second={foredata.celcius_second} third={foredata.celcius_third} fourth={foredata.celcius_fourth} fifth={foredata.celcius_fifth} sixth={foredata.celcius_sixth} pictures={foredata.images_list} />
        < AirCondition feel={data.feelLike} pressure={data.pressure} speed={data.speed} visibility={data.visibility}
        humidity={data.humidity} />
      </div>
  )
}

export default MainCon
