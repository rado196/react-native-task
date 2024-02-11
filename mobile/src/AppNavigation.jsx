import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import TasksListScreen from './screens/TasksListScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const AppStack = createStackNavigator();

const modalAnimation = Platform.select({
  ios: {},
  android: {
    gestureEnabled: true,
    ...TransitionPresets,
  },
});

function AppNavigation() {
  return (
    <AppStack.Navigator
      initialRouteName="TasksListScreen"
      screenOptions={{
        headerShown: false,
        ...modalAnimation,
      }}
    >
      <AppStack.Screen name="TasksListScreen" component={TasksListScreen} />
      <AppStack.Screen
        name="AddTaskScreen"
        component={AddTaskScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </AppStack.Navigator>
  );
}

export default AppNavigation;
