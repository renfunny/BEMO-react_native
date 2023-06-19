import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import SearchInput from "./SearchInput";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-glyphs/30/0033CC/ellipsis.png",
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
      <SearchInput />

      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/windows/32/0033CC/search--v1.png",
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
    marginBottom: 10,
    zIndex: 100,
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

export default SearchBar;
