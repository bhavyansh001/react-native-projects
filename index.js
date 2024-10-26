/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import AppPro from './AppPro'; // project 1
// import Project2 from './Project2'; // project 2
// import PasswordGenerator from './PasswordGenerator';  // project 3
// import rollTheDice from './src/rollTheDice'; // project 4
import flatList from './src/flatList'; // project 5
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => flatList);
