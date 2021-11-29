import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import Map from './pages/Map';
import Records from './pages/Records';
import Schedule from './pages/Schedule';
import Mapdetail from './pages/Mapdetail';
import Weighing from './pages/Weighing';
import Articles from './pages/Articles';
import Articlesdetail from './pages/Articlesdetail';

const AppNavigator = createStackNavigator({
        Home: { screen: Home },
        Chatbot: { screen: Chatbot },
        Map: { screen: Map },
        Records: { screen: Records },
        Schedule: { screen: Schedule },
        Mapdetail: { screen: Mapdetail },
        Weighing: { screen: Weighing },
        Articles: { screen: Articles },
        Articlesdetail: { screen: Articlesdetail },
    },
    {
        headerMode: 'none',
        navigationOptions: {
        headerVisible: false,
    }
   }
);


const AppNav = createAppContainer(AppNavigator);

export default AppNav;