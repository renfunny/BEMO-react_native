import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import AccountInfo from "../components/accountScreen/AccountInfo";
import Header from "../components/accountScreen/Header";
import { db } from "../firebase";

const AccountScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  const { email } = route.params;
  const width = Dimensions.get("window").width;

  const getPosts = () => {
    const unsubscribe = db
      .collection("users")
      .doc(email)
      .collection("posts")
      .orderBy("craetedAt", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    return unsubscribe;
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getPosts();
    }
    return () => (mounted = false);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Header email={email} />
      <AccountInfo email={email} />
      <View style={{ flexDirection: "row", flexWrap: 1, marginTop: 20 }}>
        {posts?.map((post, index) => (
          <Pressable
            key={post.id}
            onPress={() =>
              navigation.navigate("PostScreen", {
                createdAt: post.createdAt,
                username: post.user,
              })
            }
          >
            <Image
              source={{ uri: post.imageUrl }}
              style={{
                width: width * 0.33,
                height: width * 0.33,
                margin: 0.3,
              }}
            />
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
