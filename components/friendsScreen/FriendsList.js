import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { db, firebase } from "../../firebase";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";

const FriendsList = () => {
  const navigation = useNavigation();
  const [friends, setFriends] = useState([]);
  const [friendsData, setFriendsData] = useState([]);

  const getFriends = async () => {
    const user = firebase.auth().currentUser;
    const doc = await db.collection("users").doc(user.email).get();
    if (doc.exists) {
      const friends = doc.data().following;
      setFriends(friends);
      renderFriends(friends);
    }
  };

  const getUserDataByEmail = async (email) => {
    const querySnapshot = await db
      .collection("users")
      .where("email", "==", email)
      .get();

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      return userDoc.data();
    }
    return null;
  };

  const renderFriends = async (friends) => {
    const data = [];
    for (const email of friends) {
      const userData = await getUserDataByEmail(email);
      if (userData) {
        data.push(userData);
      }
    }
    setFriendsData(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getFriends();
    };
    fetchData();
  }, []);

  return (
    <View>
      <Divider orientation="horizontal" width={1} />
      {friendsData.map((friend, index) => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 5,
            alignItems: "center",
          }}
          key={index}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: friend.profile_picture }}
              style={styles.story}
            />
            <View>
              <Text style={{ color: "black", marginLeft: 5, fontWeight: 700 }}>
                {friend.username}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("AccountScreen", { email: friend.email })
                }
              >
                <Text
                  style={{
                    marginLeft: 5,
                    color: "#0033CC",
                    textDecorationLine: "underline",
                  }}
                >
                  Visitar perfil
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "black",
  },
});
export default FriendsList;
