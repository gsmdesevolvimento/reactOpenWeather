import React from 'react';
import snapshot from 'check-snapshot';
import ReactWeather from '../src/js/components/ReactWeather';
import { mappedForecast as forecast } from './fixtures/openweather/forecast';
import { mappedCurrent as current } from './fixtures/openweather/current';

describe('ReactWeather', () => {
  test('should render the loader when isLoading is true ', () => {
    snapshot(
      <ReactWeather
        data={null}
        lang="pt"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
        isLoading
      />,
    );
  });
});
