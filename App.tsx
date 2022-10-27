import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import useCachedResources from './src/hooks/useCachedResources';
import store, { persistor } from './src/redux/store';
import { MainNavigator } from './src/navigation/RootNavigator';
import React from "react";

export default function App() {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  } else {
    return null;
  }
}
