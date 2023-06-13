import { View, Text, Image } from "react-native";
import React from "react";

const StoreItems = ({ post, index }) => {
  return (
    <View style={{ width: "45%", paddingVertical: 20 }}>
      <ItemImage post={post} />
      <Text style={{ textAlign: "center", fontWeight: 500 }}>{post.user}</Text>
      <Text style={{ textAlign: "center" }}>{post.caption}</Text>
    </View>
  );
};
const ItemImage = ({ post }) => (
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
export default StoreItems;
