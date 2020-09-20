import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList104394Navigator from '../features/ArticleList104394/navigator';
import ArticleList104375Navigator from '../features/ArticleList104375/navigator';
import ArticleList104374Navigator from '../features/ArticleList104374/navigator';
import ArticleList104373Navigator from '../features/ArticleList104373/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList104394: { screen: ArticleList104394Navigator },
ArticleList104375: { screen: ArticleList104375Navigator },
ArticleList104374: { screen: ArticleList104374Navigator },
ArticleList104373: { screen: ArticleList104373Navigator },

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
