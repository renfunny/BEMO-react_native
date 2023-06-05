import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "CameraScreen",
    active: "https://img.icons8.com/material-rounded/24/0033CC/camera--v1.png",
    inactive:
      "https://img.icons8.com/material-outlined/24/0033CC/camera--v1.png",
  },
  {
    name: "StoreScreen",
    active:
      "https://img.icons8.com/fluency-systems-filled/60/0033CC/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/60/0033CC/shopping-bag-full.png",
  },
  {
    name: "HomeScreen",
    active: "https://img.icons8.com/fluency-systems-filled/60/0033CC/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/60/0033CC/home.png",
  },
  {
    name: "NotificationsScreen",
    active:
      "https://img.icons8.com/ios-filled/50/0033CC/appointment-reminders--v1.png",
    inactive:
      "https://img.icons8.com/ios/50/0033CC/appointment-reminders--v1.png",
  },
  {
    name: "FriendsScreen",
    active:
      "https://img.icons8.com/material-rounded/24/0033CC/user-group-man-man.png",
    inactive:
      "https://img.icons8.com/material-outlined/24/0033CC/user-group-man-man.png",
  },
];

const BottomTabs = ({ icons, component, setComponent }) => {
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="horizontal" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon
            key={index}
            icon={icon}
            component={component}
            setComponent={setComponent}
          />
        ))}
      </View>
    </View>
  );
};

const Icon = ({ icon, component, setComponent }) => (
  <TouchableOpacity onPress={() => setComponent(icon.name)}>
    <Image
      source={{ uri: component === icon.name ? icon.active : icon.inactive }}
      style={styles.icon}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
export default BottomTabs;
