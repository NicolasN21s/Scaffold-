import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';

test('HomeScreen renders correctly', () => {
  const { getByText } = render(<HomeScreen />);
  expect(getByText('Price:')).toBeTruthy();
});
