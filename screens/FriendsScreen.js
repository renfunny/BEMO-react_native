import { View, Text } from "react-native";
import React from "react";
import FriendsHeader from "../components/friendsScreen/FriendsHeader";
import FriendsList from "../components/friendsScreen/FriendsList";

const FriendsScreen = ({ navigation }) => {
  return (
    <View>
      <FriendsHeader navigation={navigation} />
      <FriendsList />
    </View>
  );
};

export default FriendsScreen;
