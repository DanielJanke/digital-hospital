import {
  AppRegistry
} from "react-native";
import {
  Navigation
} from "react-native-navigation";
AppRegistry.registerComponent("digitalhospital", () => App);
import {
  registerScreens,
  NAV_SCREENS
} from "./screens";

import logger from "redux-logger";
import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import store from "./redux";
import thunk from "redux-thunk";

import AppStateHandler from "./AppStateHandler";

// const createStoreWithMiddleware = applyMiddleware(thunk, logger)(
//   createStore
// );

// function configureStore(initialState) {
//   return createStoreWithMiddleware(combineReducers({
//     reducer
//   }), initialState);
// }

// const store = configureStore();

registerScreens(store);

const loginScreen = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: NAV_SCREENS.LOGIN_SCREEN
      // screen: NAV_SCREENS.CHATBOT_VIEW
    }
  });
};

const dashboard = () => {
  Navigation.startTabBasedApp({
    tabs: [{
        label: "Übersicht",
        screen: NAV_SCREENS.MY_AREA,
        icon: require("./assets/tabbar/overview.png")
      },
      {
        label: "Karte",
        screen: NAV_SCREENS.MAP_VIEW,
        icon: require("./assets/tabbar/compass.png"),
        title: "Screen Two"
      },
      {
        label: "Informationen",
        screen: NAV_SCREENS.INFORMATION_VIEW,
        icon: require("./assets/tabbar/more.png"),
        title: "Screen Two"
      }
    ],
    tabsStyle: {
      tabBarTranslucent: true,
      tabBarHidden: true
    }
  });
};

const stateHandler = new AppStateHandler({
  store,
  // onSignedOut: loginScreen,
  onSignedOut: dashboard,
  onSingedIn: dashboard
});
