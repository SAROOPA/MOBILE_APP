import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import  ReviewForm  from './form';
import HomePage from './Homescreen';


const PageScreen = {
    Home: { 
        screen: HomePage
    },
    RegForm: {
        screen:  ReviewForm
    },
   
}
const Stack = createStackNavigator(PageScreen);
export default createAppContainer(Stack);
