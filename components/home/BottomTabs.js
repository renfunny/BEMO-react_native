import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Search",
    active: "https://img.icons8.com/material-rounded/24/0033CC/camera--v1.png",
    inactive:
      "https://img.icons8.com/material-outlined/24/0033CC/camera--v1.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/60/0033CC/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/60/0033CC/shopping-bag-full.png",
  },
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/60/0033CC/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/60/0033CC/home.png",
  },
  {
    name: "Reels",
    active:
      "https://img.icons8.com/ios-filled/50/0033CC/appointment-reminders--v1.png",
    inactive:
      "https://img.icons8.com/ios/50/0033CC/appointment-reminders--v1.png",
  },
  {
    name: "Profile",
    active:
      "https://img.icons8.com/material-rounded/24/0033CC/user-group-man-man.png",
    inactive:
      "https://img.icons8.com/material-outlined/24/0033CC/user-group-man-man.png",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={styles.icon}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "3%",
    zIndex: 999,
    backgroundColor: "#000",
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
