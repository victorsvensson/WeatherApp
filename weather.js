import axios from "axios";

//API KEY
const API_KEY = "85f605f66fed83b4cd172bf4c5259bfe";

//Make a request to the weather API app
export function getWeather(latitude, longitude, timeZone){
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`).then(({data}) => {
    console.log(data);
      return data;
  })
}