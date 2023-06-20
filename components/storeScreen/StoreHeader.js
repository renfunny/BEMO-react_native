import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import SearchInput from "../home/SearchInput";

const handleSignout = async () => {
  try {
    await firebase.auth().signOut();
    console.log("Signed out!");
  } catch (error) {
    console.log(error.message);
  }
};

const StoreHeader = ({ navigation }) => (
  <View>
    <Header navigation={navigation} />
    <SearchBar />
  </View>
);

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

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/50/0033CC/long-arrow-left.png",
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
      <SearchInput />

      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/material-rounded/24/0033CC/user-group-man-man.png",
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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  searchContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 5,
    marginBottom: 10,
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

export default StoreHeader;
