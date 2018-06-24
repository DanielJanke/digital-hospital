import {
  Navigation
} from "react-native-navigation";

import LoginView from "../components/LoginView";

import MyArea from "../components/Timeline";
import AppointmentDetail from "../components/AppointmentDetail";
import DoctorDetailView from "../components/DoctorDetailView";
import ChecklistDetailView from "../components/ChecklistDetailView";
import ChatbotView from "../components/ChatbotView";
import MapView from "../components/MapView";
import FormDetailView from "../components/FormDetailView";

// import PushedScreen from "./PushedScreen";

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent("LoginScreen", () => LoginView);

  Navigation.registerComponent("example.MyArea", () => MyArea);
  Navigation.registerComponent("example.AppointmentDetail", () => AppointmentDetail);
  Navigation.registerComponent("example.DoctorDetailView", () => DoctorDetailView);
  Navigation.registerComponent("example.ChecklistDetailView", () => ChecklistDetailView);
  Navigation.registerComponent("example.PushedScreen", () => MyArea);

  Navigation.registerComponent("example.ChatbotView", () => ChatbotView);
  Navigation.registerComponent("example.MapView", () => MapView);
  Navigation.registerComponent("example.FormDetailView", () => FormDetailView);

}
