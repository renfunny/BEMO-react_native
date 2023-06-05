import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Divider } from "react-native-elements";
import { firebase, db } from "../../firebase";
import { useNavigation } from "@react-navigation/core";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/0033CC/like--v1.png",
    likedImageUrl: "https://img.icons8.com/ios-filled/50/0033CC/like--v1.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/0033CC/speech-bubble.png",
  },
];

const Post = ({ post, index }) => {
  const navigation = useNavigation();
  const [comments, setComments] = useState([]);

  const getComments = () => {
    db.collection("users")
      .doc(post.owner_email)
      .collection("posts")
      .doc(post.id)
      .collection("comments")
      .onSnapshot((snapshot) => {
        setComments(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            comment: doc.data().comment,
            user: doc.data().user,
            userImage: doc.data().userImage,
          }))
        );
      });
  };

  useEffect(() => {
    getComments();
  }, []);

  const handleLike = (post) => {
    const currentLikeStatus = !post.likes_by_users.includes(
      firebase.auth().currentUser.email
    );

    db.collection("users")
      .doc(post.owner_email)
      .collection("posts")
      .doc(post.id)
      .update({
        likes_by_users: currentLikeStatus
          ? firebase.firestore.FieldValue.arrayUnion(
              firebase.auth().currentUser.email
            )
          : firebase.firestore.FieldValue.arrayRemove(
              firebase.auth().currentUser.email
            ),
      })
      .then(() => {
        console.log("Post successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating post: ", error);
      });
  };
  return (
    <View style={{ marginBottom: 35 }}>
      {index == 0 ? (
        <Divider width={1} orientation="horizontal" color="#303030" />
      ) : null}
      <PostHeader navigation={navigation} post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 15 }}>
        <PostFooter
          navigation={navigation}
          post={post}
          handleLike={handleLike}
        />
        {/* <Likes post={post} /> */}
        <Caption post={post} />
        <CommentSection
          post={post}
          comments={comments}
          navigation={navigation}
        />
        <Comments comments={comments} />
      </View>
    </View>
  );
};
//Post Components
const PostHeader = ({ post, navigation }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text
        style={{ color: "black", marginLeft: 5, fontWeight: 700 }}
        onPress={() =>
          navigation.navigate("AccountScreen", { email: post.owner_email })
        }
      >
        {post.user}
      </Text>
    </View>
    <View>
      <Image
        source={{
          uri: "https://img.icons8.com/ios/50/0033CC/price-tag--v1.png",
        }}
        style={styles.footerIcon}
      />
    </View>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 600, paddingHorizontal: "0.5rem" }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ handleLike, post, navigation }) => (
  <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
    <View style={styles.leftFooterIconsContainer}>
      <TouchableOpacity onPress={() => handleLike(post)}>
        <Image
          style={styles.footerIcon}
          source={{
            uri: post.likes_by_users.includes(firebase.auth().currentUser.email)
              ? postFooterIcons[0].likedImageUrl
              : postFooterIcons[0].imageUrl,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CommentsScreen", { postData: post })
        }
      >
        <Image
          style={styles.footerIcon}
          source={{ uri: postFooterIcons[1].imageUrl }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

// const Likes = ({ post }) => (
//   <View
//     style={{
//       flexDirection: "row",
//       marginTop: 4,
//       justifyContent: "flex-end",
//       marginRight: 40,
//     }}
//   >
//     <Text style={{ color: "black", fontWeight: 600 }}>
//       {post.likes_by_users.length.toLocaleString("en")} likes
//     </Text>
//   </View>
// );

const Caption = ({ post }) => (
  <View style={{ marginTop: -25 }}>
    <Text style={{ color: "black" }}>
      <Text style={{ fontWeight: 600 }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({ post, comments, navigation }) => (
  <View style={{ marginTop: 5 }}>
    {!!comments.length && (
      <Text
        onPress={() =>
          navigation.navigate("CommentsScreen", { postData: post })
        }
        style={{ color: "gray" }}
      >
        View{comments.length > 1 ? " all" : ""} {comments.length}{" "}
        {comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ comments }) => (
  <>
    {!!comments.length ? (
      <>
        {comments?.length <= 2 ? (
          <>
            {comments?.map((comment, index) => (
              <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
                <Text style={{ color: "white" }}>
                  <Text style={{ fontWeight: "600" }}>{comment.user}</Text>
                  <Text> {comment.comment}</Text>
                </Text>
              </View>
            ))}
          </>
        ) : (
          <>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ color: "white" }}>
                <Text style={{ fontWeight: "600" }}>{comments[0]?.user}</Text>
                <Text> {comments[0]?.comment}</Text>
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ color: "white" }}>
                <Text style={{ fontWeight: "600" }}>{comments[1]?.user}</Text>
                <Text> {comments[1]?.comment}</Text>
              </Text>
            </View>
          </>
        )}
      </>
    ) : null}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "black",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "flex-end",
    gap: 10,
  },
});

export default Post;
