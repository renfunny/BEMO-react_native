import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const ShowNotifications = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
    </View>
  );
};

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-glyphs/90/0033CC/back.png",
        }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>Notifications</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontWeight: 700,
    fontSize: 20,
    marginRight: 25,
  },
});

export default ShowNotifications;
