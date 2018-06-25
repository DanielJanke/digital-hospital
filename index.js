import {
  AppRegistry
} from "react-native";
import {
  Navigation
} from "react-native-navigation";
import App from "./App";
AppRegistry.registerComponent("digitalhospital", () => App);
import {
  registerScreens,
  NAV_SCREENS
} from "./screens";
import logger from 'redux-logger';
import {
  createStore,
  applyMiddleware
} from 'redux';
import reducer from './redux';
import thunk from 'redux-thunk';

import AppStateHandler from './AppStateHandler'


const createStoreWithMiddleware = applyMiddleware(thunk, logger)(
  createStore
);

function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
const store = configureStore();
registerScreens(store); // this is where you register all of your app's screens


const loginScreen = () => {
  Navigation.startSingleScreenApp({
    screen: {
      // screen: NAV_SCREENS.CHATBOT_VIEW,
      screen: NAV_SCREENS.LOGIN_SCREEN,
    }
  })
}

const dashboard = () => {
  Navigation.startTabBasedApp({
    tabs: [{
        label: "Übersicht",
        screen: NAV_SCREENS.MY_AREA, // this is a registered name for a screen
        icon: require("./assets/tabbar/overview.png"),
        title: "",

      },
      {
        label: "Karte",
        screen: NAV_SCREENS.MAP_VIEW,
        icon: require("./assets/tabbar/compass.png"),
        //   icon: require("../img/two.png"),
        //   selectedIcon: require("../img/two_selected.png"), // iOS only
        title: "Screen Two"
      },
      {
        label: "Informationen",
        screen: NAV_SCREENS.FORM_DETAIL_VIEW,
        icon: require("./assets/tabbar/more.png"),
        //   icon: require("../img/two.png"),
        //   selectedIcon: require("../img/two_selected.png"), // iOS only
        title: "Screen Two"
      }
    ],
    tabsStyle: {
      tabBarTranslucent: true,
      tabBarHidden: true,
    }
  });
}

const stateHandler = new AppStateHandler({
  store,
  onSignedOut: loginScreen,
  onSingedIn: dashboard,
});
