import React from 'react';
import { render } from 'react-dom';

import { langText } from './lang';
import ReactWeather, { useOpenWeather } from '.';

const App = () => {

  const lang = 'pt';
  const tokenOpenWeather = '0d989fb95a8c4d527cc58b427c71f168';

  let userLatitude;
  let userLongitude;

  if (navigator.geolocation) {
  
      navigator.geolocation.getCurrentPosition(function(position) {

           userLatitude = position.coords.latitude;
           userLongitude = position.coords.longitude;

      }, function(error) {

          return console.log('Ocorreu uma falha ao obter sua localização, atualize a página e tente novamente.');

      });

  } else {
      
      return console.log('Por favor, forneça a sua localização.');
      
  }

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: tokenOpenWeather,
    lat: userLatitude ? userLatitude : '-23.6130583',
    lon: userLongitude ? userLongitude : '-46.8072847',
    lang: lang,
    unit: 'metric',
  });

  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang={lang}
      locationLabel={langText.pt.locationLabel}
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );

};

render(<App />, document.getElementById('application'));