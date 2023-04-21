import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SignInScreen, RecipesScreen, MealDetailsScreen} from '../screens';
import {RootStackParamList, NavigateProps} from './types';

const Stack = createStackNavigator<RootStackParamList>();

function StackRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Recipes"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Recipes" component={RecipesScreen} />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={{headerShown: true, headerTitle: 'Receita Completa'}}
      />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}

export type {NavigateProps};
export {Router};
