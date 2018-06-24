import {
  AppRegistry
} from "react-native";
import {
  Navigation
} from "react-native-navigation";

import App from "./App";

AppRegistry.registerComponent("digitalhospital", () => App);

import {
  registerScreens
} from "./screens";

registerScreens(); // this is where you register all of your app's screens

// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'LoginScreen', // unique ID registered with Navigation.registerScreen
//   }
// })


Navigation.startTabBasedApp({
  tabs: [{
      label: "Übersicht",
      screen: "example.MyArea", // this is a registered name for a screen
      icon: require("./assets/tabbar/overview.png"),
      title: "",
      systemItem: "compose"
    },
    {
      label: "Karte",
      screen: "example.MapView",
      icon: require("./assets/tabbar/compass.png"),
      //   icon: require("../img/two.png"),
      //   selectedIcon: require("../img/two_selected.png"), // iOS only
      title: "Screen Two"
    },
    {
      label: "Informationen",
      screen: "example.MyArea",
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
