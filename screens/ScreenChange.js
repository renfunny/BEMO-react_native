import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import HomeScreen from "./HomeScreen";
import BottomTabs from "../components/home/BottomTabs";
import { bottomTabIcons } from "../components/home/BottomTabs";
import NotificationsScreen from "./NotificationsScreen";
import StoreScreen from "./StoreScreen";
import FriendsScreen from "./FriendsScreen";

const ScreenChange = ({ navigation }) => {
  const [component, setComponent] = useState("StoreScreen");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {component === "HomeScreen" ? (
        <>
          <HomeScreen navigation={navigation} />
          <BottomTabs
            icons={bottomTabIcons}
            setComponent={setComponent}
            component={component}
          />
        </>
      ) : component === "StoreScreen" ? (
        <>
          <StoreScreen navigation={navigation} />
          <BottomTabs
            icons={bottomTabIcons}
            setComponent={setComponent}
            component={component}
          />
        </>
      ) : component === "NotificationsScreen" ? (
        <>
          <NotificationsScreen />
          <BottomTabs
            icons={bottomTabIcons}
            setComponent={setComponent}
            component={component}
          />
        </>
      ) : (
        component === "FriendsScreen" && (
          <>
            <FriendsScreen />
            <BottomTabs
              icons={bottomTabIcons}
              setComponent={setComponent}
              component={component}
            />
          </>
        )
      )}
    </SafeAreaView>
  );
};

export default ScreenChange;
