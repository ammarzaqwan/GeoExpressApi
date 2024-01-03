const axios = require("axios");
const getForecast = async (req, res) => {
  const { q } = req.query;
  const country = req.query;
  try {
    const opencageResponse = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${q}&key=95b58fd45d99494a96077667f1173e36`
    );
    const { lat, lng } = opencageResponse.data.results[0].geometry;

    const openmeteoResponse = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=is_day&hourly=temperature_2m,rain,wind_speed_10m,temperature_80m&forecast_days=1`
    );

    const locationData = openmeteoResponse.data;
    res.render("forecast", { locationData, country: q });
    console.log(locationData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
};

module.exports = { getForecast };
