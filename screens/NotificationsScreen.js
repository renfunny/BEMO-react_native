import { SafeAreaView } from "react-native";
import React from "react";
import ShowNotifications from "../components/notificationsScreen/ShowNotifications";
import NotificationsInfo from "../components/notificationsScreen/NotificationsInfo";
import { Divider } from "react-native-elements";

const NotificationsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ShowNotifications navigation={navigation} />
      <Divider />
      <NotificationsInfo />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
