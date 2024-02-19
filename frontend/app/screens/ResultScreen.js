//StAuth10244: I Seo James, 000872976 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import LeaderTile from "../components/LeaderTile";

export default function ResultScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const leaders = route.params.leaders;
  const username = route.params.username;
  useEffect(() => {
    navigation.setOptions({
      title: route.params.correct === "correct" ? "Correct!" : "Incorrect",
      headerStyle: {
        backgroundColor: route.params.correct === "correct" ? "#D0F288" : "#DF826C",
      },
    });
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: route.params.correct === "correct" ? "#D0F288" : "#DF826C",
        },
      ]}
    >
      <FlatList
        data={leaders}
        renderItem={({ item: leader, index }) => (
          <LeaderTile leader={leader} index={index} />
        )}
        keyExtractor={(_, index) => index}
        style={{ width: "80%", maxHeight: "60%" }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.replace("GameScreen",{username});
        }}
      >
        <Text>Play Again!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#8ADAB2",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: "80%",
  },
});
