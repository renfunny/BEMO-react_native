import { SafeAreaView } from "react-native";
import React from "react";
import ShowNotifications from "../components/notifications/ShowNotifications";

const NotificationsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ShowNotifications navigation={navigation} />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
