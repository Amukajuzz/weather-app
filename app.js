const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'src/public')));

app.get('/', async (req, res) => {
    const city = req.query.city || 'London'; // Default city
    const apiKeyWeather = process.env.API_KEY_OPENWEATHER;
    const apiKeyNews = process.env.API_KEY_NEWS;
    const apiKeyCurrency = process.env.API_KEY_CURRENCY;

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyWeather}&units=metric`;
    const newsUrl = `https://newsapi.org/v2/everything?q=${city}&apiKey=${apiKeyNews}`;
    const currencyUrl = `https://api.exchangerate-api.com/v4/latest/USD`;

    try {
        const weatherResponse = await axios.get(weatherUrl);
        const weatherData = weatherResponse.data;

        const newsResponse = await axios.get(newsUrl);
        const newsData = newsResponse.data.articles.slice(0, 5);

        const currencyResponse = await axios.get(currencyUrl);
        const currencyData = currencyResponse.data;

        const kztRate = currencyData.rates['KZT'];
        const eurRate = currencyData.rates['EUR'];

        const latitude = weatherData.coord.lat;
        const longitude = weatherData.coord.lon;

        res.render('index', {
            weather: weatherData,
            lat: latitude,
            lon: longitude,
            news: newsData,
            currency: { KZT: kztRate, EUR: eurRate }
        });
    } catch (error) {
        console.error(error);
        res.render('index', { weather: null, lat: null, lon: null, news: null, currency: null });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
