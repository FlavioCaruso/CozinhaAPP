import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  SignIn: undefined;
  Recipes: undefined;
  MealDetails: undefined;
};

export type NavigateProps = StackNavigationProp<RootStackParamList>;
