import {
  Navigation
} from "react-native-navigation";

import {
  Provider
} from "react-redux";

import LoginView from "../components/LoginView";

import MyArea from "../components/Timeline";
import AppointmentDetail from "../components/AppointmentDetail";
import DoctorDetailView from "../components/DoctorDetailView";
import ChecklistDetailView from "../components/ChecklistDetailView";
import ChatbotView from "../components/ChatbotView";
import MapView from "../components/MapView";
import FormDetailView from "../components/FormDetailView";
import InformationView from "../components/InformationView";
import ChatbotViewAnamnese from "../components/ChatbotViewAnamnese";

export const NAV_SCREENS = {
  LOGIN_SCREEN: "LoginScreen",

  MY_AREA: "MyArea",
  MAP_VIEW: "MapView",

  INFORMATION_VIEW: "InformationView",

  APPOINTMENT_DETAIL: "AppointmentDetail",
  DOCTOR_DETAIL_VIEW: "DoctorDetailView",
  CHECKLIST_DETAIL_VIEW: "ChecklistDetailView",
  CHATBOT_VIEW: "ChatbotView",
  FORM_DETAIL_VIEW: "FormDetailView",

  CHATBOT_VIEW_ANAMNESE: "ChatbotViewAnamnese",
};

// import PushedScreen from "./PushedScreen";

// register all screens of the app (including internal ones)
export function registerScreens(store) {
  Navigation.registerComponent(NAV_SCREENS.LOGIN_SCREEN, () => LoginView, store, Provider);

  Navigation.registerComponent(NAV_SCREENS.MY_AREA, () => MyArea, store, Provider);
  Navigation.registerComponent(NAV_SCREENS.APPOINTMENT_DETAIL, () => AppointmentDetail, store, Provider);
  Navigation.registerComponent(NAV_SCREENS.DOCTOR_DETAIL_VIEW, () => DoctorDetailView, store, Provider);
  Navigation.registerComponent(NAV_SCREENS.CHECKLIST_DETAIL_VIEW, () => ChecklistDetailView, store, Provider);

  Navigation.registerComponent(NAV_SCREENS.CHATBOT_VIEW, () => ChatbotView, store, Provider);
  Navigation.registerComponent(NAV_SCREENS.MAP_VIEW, () => MapView, store, Provider);
  Navigation.registerComponent(NAV_SCREENS.INFORMATION_VIEW, () => InformationView, store, Provider);
  Navigation.registerComponent(NAV_SCREENS.FORM_DETAIL_VIEW, () => FormDetailView, store, Provider);

  Navigation.registerComponent(NAV_SCREENS.CHATBOT_VIEW_ANAMNESE, () => ChatbotViewAnamnese, store, Provider);
}
