import { AppRegistry } from "react-native";
import { Navigation } from "react-native-navigation";

import App from "./App";

AppRegistry.registerComponent("digitalhospital", () => App);

import { registerScreens } from "./screens";

registerScreens(); // this is where you register all of your app's screens

Navigation.startTabBasedApp({
  tabs: [
    {
      label: "Meins",
      screen: "example.MyArea", // this is a registered name for a screen
      //   icon: require("../img/one.png"),
      //   selectedIcon: require("../img/one_selected.png"), // iOS only
      title: "Screen One",
      systemItem: "compose"
    },
    {
      label: "Übersicht",
      screen: "example.MyArea",
      //   icon: require("../img/two.png"),
      //   selectedIcon: require("../img/two_selected.png"), // iOS only
      title: "Screen Two"
    },
    {
      label: "Weiteres",
      screen: "example.MyArea",
      //   icon: require("../img/two.png"),
      //   selectedIcon: require("../img/two_selected.png"), // iOS only
      title: "Screen Two"
    }
  ]
});
