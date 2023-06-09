import { View, Text } from "react-native";
import React from "react";
import StoreHeader from "../components/storeScreen/StoreHeader";

const StoreScreen = ({ navigation }) => {
  return (
    <View>
      <StoreHeader navigation={navigation} />
    </View>
  );
};

export default StoreScreen;
