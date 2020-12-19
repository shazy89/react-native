import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreenjs from './src/screens/ImageScreen.js';
import CounterScreen from './src/screens/CounterScreen.js';
import ColorScreen from './src/screens/ColorScreen.js';
import SquareScreen from './src/screens/SquareScreen.js';


// navigator is what allows us to change content
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Imagescrn: ImageScreenjs,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
