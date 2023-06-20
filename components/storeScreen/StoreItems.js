import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const StoreItems = ({ post, index }) => {
  const navigation = useNavigation();

  return (
    <View style={{ width: "45%", paddingVertical: 10 }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("PostScreen", {
            createdAt: post.createdAt,
            username: post.user,
            email: post.owner_email,
          })
        }
      >
        <ItemImage post={post} />
      </TouchableOpacity>
      <Text style={{ textAlign: "center", fontWeight: 500 }}>{post.user}</Text>
      <Text style={{ textAlign: "center" }}>{post.caption}</Text>
    </View>
  );
};
const ItemImage = ({ post }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 160,
        paddingHorizontal: "0.5rem",
      }}
    >
      <Image
        source={{ uri: post.imageUrl }}
        style={{
          height: "100%",
          resizeMode: "cover",
          borderRadius: 30,
        }}
      />
    </View>
  );
};
export default StoreItems;
