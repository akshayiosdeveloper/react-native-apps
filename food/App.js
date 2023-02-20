import { createAppContainer } from "react-navigation";
import  {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator({
  MySearch: SearchScreen
}, {
initialRouteName:'MySearch',
defaultNavigationOptions: {
  title: "Bussiness Search"
}
}
);
export default createAppContainer(navigator);
