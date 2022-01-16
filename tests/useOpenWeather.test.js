/* eslint-disable import/no-extraneous-dependencies */
import MockAdapter from 'axios-mock-adapter';
import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import useOpenWeather, {
  formatDate,
  mapCurrent,
  mapForecast,
  mapData,
  fetchReducer,
} from '../src/js/providers/openweather/useOpenWeather';
import {
  mappedCurrent,
  apiCurrentResponse,
} from './fixtures/openweather/current';
import {
  mappedForecast,
  apiForecastResponse,
} from './fixtures/openweather/forecast';
import { getIcon } from '../src/js/providers/openweather/iconsMap';
import svgIcons from '../src/js/svgIcons';

describe('Testing data mapping', () => {
  test('should return formatted date', () => {
    expect(formatDate('1573516800')).toEqual('Tue 12 November');
  });
  test('return empty string if input date is invalid', () => {
    expect(formatDate(null)).toEqual('');
  });
  test('should map today data', () => {
    const mapped = mapCurrent(apiCurrentResponse);
    expect(mapped).toEqual(mappedCurrent);
  });
  test('should map forecast data', () => {
    const mapped = mapForecast(apiForecastResponse);
    expect(mapped).toEqual(mappedForecast);
  });
  test('should map combined current and forecast data', () => {
    const mapped = mapData(apiForecastResponse, apiCurrentResponse, 'en');
    const expected = {
      current: mappedCurrent,
      forecast: mappedForecast,
    };
    expect(mapped).toEqual(expected);
  });
});

describe('Test Icons Map', () => {
  test('should return the correct icon', () => {
    const icon = getIcon('04d');
    expect(icon).toEqual(svgIcons.cloudy);
  });
  test('should return default icon when icon is not found', () => {
    const icon = getIcon('unknown');
    expect(icon).toEqual(svgIcons.sunny);
  });
});
