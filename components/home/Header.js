import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { firebase } from "../../firebase";

const handleSignout = async () => {
  try {
    await firebase.auth().signOut();
    console.log("Signed out!");
  } catch (error) {
    console.log(error.message);
  }
};

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
        <Image
          source={{
            uri: "https://img.icons8.com/android/24/0033CC/plus.png",
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignout}>
        <Image
          style={styles.logo}
          source={require("../../assets/bemo-logo.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/fluency-systems-regular/60/0033CC/user.png",
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 5,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
});

export default Header;
