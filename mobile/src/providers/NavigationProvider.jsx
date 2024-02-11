import React from 'react';
import {
  NavigationContainer,
  DefaultTheme as defaultNavigationTheme,
} from '@react-navigation/native';

const navigationTheme = {
  ...defaultNavigationTheme,
  colors: {
    ...defaultNavigationTheme.colors,
    background: '#ffffff',
  },
};

function NavigationProvider({ children }) {
  return (
    <NavigationContainer theme={navigationTheme}>
      {children}
    </NavigationContainer>
  );
}

export default NavigationProvider;
