import React from 'react';
import snapshot from 'check-snapshot';
import WeatherIcon from '../src/js/components/WeatherIcon';

describe('WeatherIcon', () => {
  test('render WeatherIcon', () => {
    snapshot(
      <WeatherIcon
        path="svg path here"
        size={120}
        color="white"
        title="icon"
      />,
    );
  });
});
