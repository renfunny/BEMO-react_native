import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase";

const SearchInput = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      try {
        // Perform real-time search in Firestore
        const usersRef = db.collection("users");
        const query = searchQuery.toLowerCase();

        // Apply real-time listener for search query
        const queryRef = usersRef
          .where("username", ">=", query)
          .where("username", "<=", query + "\uf8ff");

        queryRef.onSnapshot((snapshot) => {
          const results = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            results.push({ id: doc.id, ...data });
          });
          setSearchResults(results);
        });

        // Clean up the listener when component unmounts or search query changes
        return () => queryRef();
      } catch (error) {
        console.error("Error searching for users:", error);
      }
    };

    if (searchQuery.trim() !== "") {
      search();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const navigateToAccount = (email) => {
    navigation.navigate("AccountScreen", { email });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchInput}
      />
      <View
        style={[
          styles.searchResults,
          searchResults.length > 0 && styles.resultsBackground,
        ]}
      >
        {/* Render real-time search results */}
        {searchResults.map((user) => (
          <TouchableOpacity
            key={user.id}
            onPress={() => navigateToAccount(user.email)}
          >
            <Text>{user.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  searchInput: {
    height: 25,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  searchResults: {
    position: "absolute",
    top: 26,
    left: 0,
    right: 0,
    zIndex: 999,
    borderColor: "gray",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  resultsBackground: {
    backgroundColor: "#F5F5F5",
  },
});

export default SearchInput;
