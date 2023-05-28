import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

const searchSchema = Yup.object().shape({
  search: Yup.string().max(
    15,
    "Search has reached the maximum character limit"
  ),
});

const SearchInput = () => {
  return (
    <Formik
      initialValues={{ search: "" }}
      validationSchema={searchSchema}
      validateOnMount={true}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchText}
            onChangeText={handleChange("search")}
            onBlur={handleBlur("search")}
            value={values.search}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 200,
  },
  searchText: {
    paddingHorizontal: 5,
  },
});

export default SearchInput;
