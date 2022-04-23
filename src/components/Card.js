import React from 'react';
import sun from '../images/sun-svgrepo-com.svg';
import cloudy from '../images/clouds-weather-svgrepo-com.svg';
import snow from '../images/morning-snow-svgrepo-com.svg';
import rain from '../images/rain-svgrepo-com.svg';
import thunderstorm from '../images/weather-8_icon-icons.com_67745.svg';
import random from '../images/2998142-cloud-forecast-rainbow-weather_99868.svg'

function Card({ data, onButton }) {

    const windDeg = data.wind.deg === 0
        ? <p className='wind-deg'>Северный</p>
        : data.wind.deg === 90
            ? <p className='wind-deg'>Восточный</p>
            : data.wind.deg === 180
                ? <p className='wind-deg'>Южный</p>
                : data.wind.deg === 270
                    ? <p className='wind-deg'>Западный</p>
                    : 0 < data.wind.deg < 90
                        ? <p className='wind-deg'>Северо-восточный</p>
                        : 90 < data.wind.deg < 180
                            ? <p className='wind-deg'>Юго-восточный</p>
                            : 180 < data.wind.deg < 270
                                ? <p className='wind-deg'>Юго-западный</p>
                                : <p className='wind-deg'>Северо-западный</p>

    return (
        <div className={onButton ? 'card-black-theme' : 'card'}>
            <h1 className='card__title'>{data.name}</h1>
            <div className='weather'>
                {data.weather[0].description === 'пасмурно'
                    ? <p className='weather__text'><img className='weather__img' src={cloudy} alt='пасмурно' />{data.weather[0].description}</p>
                    : data.weather[0].description === 'ясно'
                        ? <p className='weather__text'><img className='weather__img' src={sun} alt='ясно' />{data.weather[0].description}</p>
                        : data.weather[0].description === 'снег'
                            ? <p className='weather__text'><img className='weather__img' src={snow} alt='снег' />{data.weather[0].description}</p>
                            : data.weather[0].description === 'дождь'
                                ? <p className='weather__text'><img className='weather__img' src={rain} alt='дождь' />{data.weather[0].description}</p>
                                : data.weather[0].description === 'морось'
                                    ? <p className='weather__text'><img className='weather__img' src={rain} alt='морось' />{data.weather[0].description}</p>
                                    : data.weather[0].description === 'гроза'
                                        ? <p className='weather__text'><img className='weather__img' src={thunderstorm} alt='гроза' />{data.weather[0].description}</p>
                                        : <p className='weather__text'><img className='weather__img' src={random} alt='random' />{data.weather[0].description}</p>
                }
            </div>
            <div>
                <p className='elem card__temp'>Температура воздуха: <b>{data.main.temp}</b> ℃</p>
                <p className='elem card__temp'>Ощущается как: <b>{data.main.feels_like}</b> ℃</p>
                <p className='elem card__wind'>Скорость ветра: <b>{data.wind.speed}</b> м/с</p>
                <p className='elem weather__text'>Направление ветра: <b>{windDeg}</b></p>
                <p className='elem card__wind'>Влажность: <b>{data.main.humidity}</b> %</p>
            </div>
            {/* <p className='elem'>Время восхода солнца: {data.sys.sunrise}</p> */}
        </div>
    )
}

export default Card