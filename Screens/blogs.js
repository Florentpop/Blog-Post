import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function BlogsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
