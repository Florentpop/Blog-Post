import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>App Settings Screen</Text>
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
