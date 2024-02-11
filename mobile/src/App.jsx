import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TasksProvider from './providers/TasksProvider';
import NavigationProvider from './providers/NavigationProvider';
import AppNavigation from './AppNavigation';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TasksProvider>
        <NavigationProvider>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true}
          />

          <AppNavigation />
        </NavigationProvider>
      </TasksProvider>
    </GestureHandlerRootView>
  );
}

export default App;
