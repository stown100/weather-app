import React from "react";
import axios from 'axios';
import Card from "./components/Card";
import api from "./components/Api";
import hand from './images/icons8-рука-вправо-100.png';


function App() {
  const [info, setInfo] = React.useState([]);
  const [onButton, setOnButton] = React.useState(false);
  const [visibleList, setVisibleList] = React.useState(false);

  // Первый способ взять данные погоды с Api
  const API_KEY_OR_SEVASTOPOL = '679810bf17593f0fb0c3d80839e32582'

  // React.useEffect(() => {
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Sevastopol,ua1&appid=${API_KEY_OR_SEVASTOPOL}&units=metric&lang=ru`).then((data) => {
  //     setInfo(data.data)
  //   })
  // }, [])

  // Второй способ взять данные погоды с Api
  React.useEffect(() => {
    Promise.all([api.getWeather()])
      .then((data) => {
        setInfo([])
        setInfo(data);
      })
      .catch(() => {
        console.error('Что-то сломалось!')
      })
  }, []);
  const weatherSevastopol = () => {
    // Promise.all([api.getWeather()])
    //   .then((data) => {
    //     setInfo([])
    //     setInfo(data);
    //     setVisibleList(!visibleList);
    //   })
    //   .catch(() => {
    //     console.error('Что-то сломалось!')
    //   })
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Sevastopol,ua1&appid=${API_KEY_OR_SEVASTOPOL}&units=metric&lang=ru`).then((data) => {
      setInfo([data.data]);
      setVisibleList(!visibleList);
    })
  }
  const weatherSimferopol = () => {
    Promise.all([api.getWeatherSimferopol()])
      .then((data) => {
        console.log(data)
        setInfo([])
        setInfo(data);
        setVisibleList(!visibleList);
      })
      .catch(() => {
        console.error('Что-то сломалось!')
      })
  }
  const weatherYalta = () => {
    Promise.all([api.getWeatherYalta()])
      .then((data, index) => {
        setInfo([])
        setInfo(data, index);
        setVisibleList(!visibleList);
      })
      .catch(() => {
        console.error('Что-то сломалось!')
      })
  }
  const weatherFeodosiya = () => {
    Promise.all([api.getWeatherFeodosiya()])
      .then((data) => {
        setInfo([])
        setInfo(data);
        setVisibleList(!visibleList);
      })
      .catch(() => {
        console.error('Что-то сломалось!')
      })
  }

  const toggleVisibleList = () => {
    setVisibleList(!visibleList);
  }

  return (
    <div className="App">
      <div className="content">
        <div className="functional">
          <h2 className="content__title">
            {onButton ? 'Светлая тема' : 'Тёмная тема'}
            <img className='content__hend-img' src={hand} alt='hand' />
            <button
              className={onButton ? "filter-checkbox__button_on" : "filter-checkbox__button_of"}
              onClick={() => {
                setOnButton(!onButton);
              }}>
            </button>
          </h2>
          <nav className={`${visibleList ? 'nav-heigth' : 'nav'}`}>
            <h3 className="nav__title" onClick={toggleVisibleList}>Выбрать город</h3>
            <ul className={`${visibleList ? 'nav__list-visible' : 'nav__list'}`}>
              {/* {cities.map((item, index) => {
                return (
                  <li className='nav__list-item' onClick={() => weatherYalta(index)}
                    key={index}>{item}</li>
                )
              })} */}
              <li className='nav__list-item' onClick={weatherSevastopol}>Севастополь</li>
              <li className='nav__list-item' onClick={weatherSimferopol}>Симферополь</li>
              <li className='nav__list-item' onClick={weatherYalta}>Ялта</li>
              <li className='nav__list-item' onClick={weatherFeodosiya}>Феодосия</li>
            </ul>
          </nav>
        </div>
        {info.length > 0
          ? info.map((data) => (
            <Card data={data} key={data} onButton={onButton} />
          ))
          : <h2 className="expectation">Получаю данные с сервера</h2>
        }
      </div>
    </div>
  );
}

export default App;
