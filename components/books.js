import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Book = () => {
  return (
    <View style={styles.bookContainer}>
      <Text>This is my component!</Text>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  bookContainer: {
    backgroundColor: "yellow",
    margin: "1em",
    width: "100%",
    height: "100%",
    padding: "2em",
  },
});
