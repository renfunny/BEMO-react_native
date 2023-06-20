import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/home/Header";
import SearchBar from "../components/home/SearchBar";
import Post from "../components/home/Post";
import { db } from "../firebase";

const HomeScreen = ({ navigation }) => {
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
      <Header navigation={navigation} />
      <SearchBar />
      <ScrollView
        style={{ marginBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {posts.map((post, index) => (
          <Post post={post} key={index} index={index} />
        ))}
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

export default HomeScreen;
