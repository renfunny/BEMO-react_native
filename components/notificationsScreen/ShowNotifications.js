import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const ShowNotifications = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const Header = () => (
  <View style={styles.headerContainer}>
    <Image />
    <Text style={styles.headerText}>Notifications</Text>
    <TouchableOpacity>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-filled/50/0033CC/long-arrow-right--v1.png",
        }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontWeight: 700,
    fontSize: 20,
    marginRight: 100,
  },
});

export default ShowNotifications;
