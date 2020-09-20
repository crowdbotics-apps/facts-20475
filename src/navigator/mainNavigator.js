import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings104463Navigator from '../features/Settings104463/navigator';
import UserProfile104456Navigator from '../features/UserProfile104456/navigator';
import Settings104455Navigator from '../features/Settings104455/navigator';
import Settings104453Navigator from '../features/Settings104453/navigator';
import SignIn2104451Navigator from '../features/SignIn2104451/navigator';
import ArticleList104396Navigator from '../features/ArticleList104396/navigator';
import ArticleList104395Navigator from '../features/ArticleList104395/navigator';
import ArticleList104394Navigator from '../features/ArticleList104394/navigator';
import ArticleList104375Navigator from '../features/ArticleList104375/navigator';
import ArticleList104374Navigator from '../features/ArticleList104374/navigator';
import ArticleList104373Navigator from '../features/ArticleList104373/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings104463: { screen: Settings104463Navigator },
UserProfile104456: { screen: UserProfile104456Navigator },
Settings104455: { screen: Settings104455Navigator },
Settings104453: { screen: Settings104453Navigator },
SignIn2104451: { screen: SignIn2104451Navigator },
ArticleList104396: { screen: ArticleList104396Navigator },
ArticleList104395: { screen: ArticleList104395Navigator },
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
