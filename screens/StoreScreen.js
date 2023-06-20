import { SafeAreaView, Text, ScrollView, StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import StoreHeader from "../components/storeScreen/StoreHeader";
import { Divider } from "react-native-elements";
import { db } from "../firebase";
import StoreItems from "../components/storeScreen/StoreItems";

const StoreScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collectionGroup("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((post) => ({ id: post.id, ...post.data() }))
        );
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StoreHeader navigation={navigation} />
      <Divider />
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          color: "#0033CC",
          fontFamily: "Arial",
          fontWeight: 500,
          marginTop: 20,
        }}
      >
        Store
      </Text>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            paddingBottom: 50,
          }}
        >
          {posts.map((post, index) => (
            <StoreItems post={post} key={index} index={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default StoreScreen;
