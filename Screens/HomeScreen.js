import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import blogs from "./blogs";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(blogs)}>
        <View style={styles.cardsWrapper}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require("../assets/profile.jpeg")}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Hello from Ghana West Africa</Text>

              <Image
                source={require("../assets/profile.jpeg")}
                resizeMode="cover"
                style={styles.cardImg2}
              />

              <Text style={styles.cardDetails}>John Doe</Text>
              <Text style={styles.cardDetails2}>. 4 min read</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.cardsWrapper}>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/fingerprint.jpg")}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>
              Your data and how it is used to gain your vote
            </Text>

            <Image
              source={require("../assets/profile.jpeg")}
              resizeMode="cover"
              style={styles.cardImg2}
            />

            <Text style={styles.cardDetails}>John Doe</Text>
            <Text style={styles.cardDetails2}>. 4 min read</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardsWrapper}>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/sandnist.png")}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>
              Why Covid may mean more facial recognition tech
            </Text>

            <Image
              source={require("../assets/profile.jpeg")}
              resizeMode="cover"
              style={styles.cardImg2}
            />

            <Text style={styles.cardDetails}>John Doe</Text>
            <Text style={styles.cardDetails2}>. 4 min read</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardsWrapper}>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/codetrain.jpg")}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>
              Codetrain to Train 1000 App Developers to Meet Increasing Market
              Demand
            </Text>

            <Image
              source={require("../assets/profile.jpeg")}
              resizeMode="cover"
              style={styles.cardImg2}
            />

            <Text style={styles.cardDetails}>John Doe</Text>
            <Text style={styles.cardDetails2}>. 4 min read</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  cardsWrapper: {
    marginTop: 2,
    width: "93%",
    alignSelf: "center",
  },
  card: {
    height: 120,
    marginVertical: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "85%",
    width: "80%",
    marginTop: 6,
    alignSelf: "center",
  },
  cardImg2: {
    height: "30%",
    width: "30%",
    borderRadius: 50,
    marginTop: 32,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  cardName: {
    marginTop: -60,
    marginLeft: 70,
  },

  cardDetails: {
    fontSize: 12,
    color: "#444",
    marginVertical: -23,
    marginLeft: 65,
  },
  cardDetails2: {
    fontSize: 12,
    color: "#444",
    marginVertical: 10,
    marginLeft: 145,
  },
});
