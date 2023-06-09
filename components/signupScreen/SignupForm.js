import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { firebase, db } from "../../firebase";

const SignupForm = ({ navigation }) => {
  const SignupFormSchema = Yup.object().shape({
    name: Yup.string().required("A name is required").min(2, "Too Short!"),
    email: Yup.string().email().required("An email is required"),
    bio: Yup.string().max(100, "Too Long!"),
    username: Yup.string().required().min(2, "Too Short!"),
    password: Yup.string()
      .required()
      .min(6, "Your password must be at least 6 characters long"),
  });

  const getRandomProfilePic = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };

  const onSignup = async (name, email, password, username, bio) => {
    try {
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log("Account created!");

      db.collection("users")
        .doc(authUser.user.email)
        .set({
          owner_uid: authUser.user.uid,
          name: name,
          username: username,
          email: authUser.user.email,
          profile_picture: await getRandomProfilePic(),
          bio: bio,
          followers: [],
          following: [],
        });
      console.log("Added to the database!");
    } catch (error) {
      Alert.alert("Oh No!!!", error.message);
    }
  };
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          username: "",
          password: "",
          bio: "",
        }}
        onSubmit={(values) => {
          onSignup(
            values.name,
            values.email,
            values.password,
            values.username,
            values.bio
          );
        }}
        validationSchema={SignupFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.name.length || values.name.length > 2
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#444"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.username.length || values.username.length > 1
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Username"
                autoCapitalize="none"
                textContentType="username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.bio.length || values.bio.length > 1
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Bio"
                autoCapitalize="none"
                textContentType="bio"
                onChangeText={handleChange("bio")}
                onBlur={handleBlur("bio")}
                value={values.bio}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length > 5
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>

            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.loginContainer}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "#6bb0f5" }}> Log In</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#fafafa",
    marginBottom: 10,
    borderWidth: 1,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096f6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  loginContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});
export default SignupForm;
