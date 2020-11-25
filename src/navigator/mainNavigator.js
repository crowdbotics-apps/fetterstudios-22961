import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList178440Navigator from '../features/ArticleList178440/navigator';
import ArticleList178439Navigator from '../features/ArticleList178439/navigator';
import ArticleList178438Navigator from '../features/ArticleList178438/navigator';
import BlankScreen2178437Navigator from '../features/BlankScreen2178437/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList178440: { screen: ArticleList178440Navigator },
ArticleList178439: { screen: ArticleList178439Navigator },
ArticleList178438: { screen: ArticleList178438Navigator },
BlankScreen2178437: { screen: BlankScreen2178437Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
