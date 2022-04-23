class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  async getWeather() {
    const res = await fetch(`${this.url}`, {
      method: 'GET',
    });
    return this._handleResponse(res);
  }

    async getWeatherYalta() {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Yalta,ua1&appid=${API_KEY_OR_SEVASTOPOL}&units=metric&lang=ru`, {
      method: 'GET',
    });
    return this._handleResponse(res);
  }

  async getWeatherSimferopol() {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Simferopol,ua1&appid=${API_KEY_OR_SEVASTOPOL}&units=metric&lang=ru`, {
      method: 'GET',
    });
    return this._handleResponse(res);
  }

  async getWeatherFeodosiya() {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Feodosiya,ua1&appid=${API_KEY_OR_SEVASTOPOL}&units=metric&lang=ru`, {
      method: 'GET',
    });
    return this._handleResponse(res);
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
const API_KEY_OR_SEVASTOPOL = '679810bf17593f0fb0c3d80839e32582'
const api = new Api({
  url: `https://api.openweathermap.org/data/2.5/weather?q=Sevastopol,ua1&appid=${API_KEY_OR_SEVASTOPOL}&units=metric&lang=ru`,
})

export default api;