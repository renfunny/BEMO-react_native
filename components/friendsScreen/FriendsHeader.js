import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import SearchInput from "../home/SearchInput";

const FriendsHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <SearchBar />
    </View>
  );
};

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <Image />
    <Text style={styles.headerText}>Friends List</Text>
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

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/windows/32/0033CC/search--v1.png",
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
    marginHorizontal: 10,
    marginTop: 10,
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

export default FriendsHeader;
