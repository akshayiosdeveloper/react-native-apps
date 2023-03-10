import { createAppContainer } from "react-navigation";
import  {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/components/ResultsShowScreen";


const navigator = createStackNavigator({
  MySearch: SearchScreen,
  ResultShow: ResultShowScreen
}, {
initialRouteName:'MySearch',
defaultNavigationOptions: {
  title: "Bussiness Search"
}
}
);
export default createAppContainer(navigator);
