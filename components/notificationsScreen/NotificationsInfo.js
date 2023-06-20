import { View, Text } from "react-native";
import React from "react";

const NotificationsInfo = () => {
  return (
    <View
      style={{
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "black", fontWeight: 700 }}>
        No new notifications!
      </Text>
    </View>
  );
};

export default NotificationsInfo;
