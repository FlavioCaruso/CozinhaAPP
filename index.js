/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppScreen from './src';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => AppScreen);
