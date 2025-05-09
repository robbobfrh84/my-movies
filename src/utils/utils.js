// Helper function to convert Kelvin to Fahrenheit
const kelvinToFahrenheit = (kelvin) => ((kelvin - 273.15) * 9/5 + 32).toFixed(2);

// Helper function to format date strings
const formatDate = (dateString) => {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Parse the data for use in components, including the weather icon
const parseForecastData = (forecastData) => {
  return forecastData.list.map(data => ({
    date: formatDate(data.dt_txt),
    temperature: kelvinToFahrenheit(data.main.temp),
    weather: data.weather[0].main,
    description: data.weather[0].description,
    icon: data.weather[0].icon // Added the weather icon
  }));
};

export { kelvinToFahrenheit, formatDate, parseForecastData };