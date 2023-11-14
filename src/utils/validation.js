import lighRain from '../assets/images/LightRain.png'
import lighCloud from '../assets/images/LightCloud.png'
import heavyRain from '../assets/images/HeavyRain.png'
import heavyCloud from '../assets/images/HeavyCloud.png'
import clear from '../assets/images/Clear.png'
import thunderstorm from '../assets/images/Thunderstorm.png'
import snow from '../assets/images/Snow.png'
import shower from '../assets/images/Shower.png'
import sleet from '../assets/images/Sleet.png'


export function validationImage (image) {
    if (image === 'light rain') {
      return lighRain
    } else if ( image === 'moderate rain') {
      return heavyRain
    } else if ( image === 'few clouds') {
        return heavyCloud
    } else if (image === 'broken clouds') {
        return lighCloud
    } else if (image === 'overcast clouds') {
        return heavyCloud
    } else if (image === 'scattered clouds') {
        return lighCloud
    } else if (image === 'clear sky') {
        return clear
    } else if (image === 'thunderstorm') {
        return thunderstorm
    } else if (image === 'snow') {
        return snow
    } else if (image === 'rain') {
        return shower
    } else if (image === 'shower rain') {
        return shower
    } else if (image === 'mist') {
        return lighCloud
    } else if (image === 'light snow') {
        return sleet
    } else if (image === 'overcast rain') {
        return heavyRain
    } else {
       return heavyRain
    }
  }
  