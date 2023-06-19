import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Post from "../components/home/Post";
import { db } from "../firebase";

const PostScreen = ({ route, navigation }) => {
  const { createdAt, username, email } = route.params;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      db.collection("users")
        .doc(email)
        .collection("posts")
        .where("createdAt", "==", createdAt)
        .limit(1)
        .onSnapshot((snapshot) => {
          setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }

    return () => (mounted = false);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/90/0033CC/back.png",
            }}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "gray",
              fontWeight: "900",
              fontSize: 12,
              marginRight: 25,
            }}
          >
            {username.toUpperCase()}
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "900",
              fontSize: 16,
              marginRight: 25,
            }}
          >
            Post
          </Text>
        </View>
        <Text></Text>
      </View>
      {posts?.map((post, index) => (
        <Post key={index} post={post} index={index} />
      ))}
    </SafeAreaView>
  );
};

export default PostScreen;
