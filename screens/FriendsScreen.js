import { View, Text } from "react-native";
import React from "react";
import FriendsHeader from "../components/friendsScreen/FriendsHeader";

const FriendsScreen = ({ navigation }) => {
  return (
    <View>
      <FriendsHeader navigation={navigation} />
    </View>
  );
};

export default FriendsScreen;
