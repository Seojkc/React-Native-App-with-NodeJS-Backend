//StAuth10244: I Seo James, 000872976 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation,useRoute } from "@react-navigation/native";
import AlertBox from "../components/AlertBox";
import axios from "axios";

export default function GameScreen() {
  const navigation = useNavigation();
  const route =useRoute();
  const [randomNumber1] = useState(Math.floor(Math.random() * 100) + 1);
  const [randomNumber2] = useState(Math.floor(Math.random() * 100) + 1);
  const [answer, setAnswer] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const username = route.params.username
  const submitAnswer = async () => {
    try {
      setIsLoading(true);
      const result =
        answer == randomNumber1 + randomNumber2 ? "correct" : "incorrect";
      const res = await axios.post(`http://localhost:3000/update`, {
        username,
        result,
      });
      navigation.replace("ResultScreen",{leaders:res.data.leaders, correct: result, username})
    } catch (e) {
      setError("Something wrong happened! Please try again later.");
      setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      {error && <AlertBox alertText={error} />}
      <Text style={styles.given}>{randomNumber1}</Text>
      <Ionicons name="md-add-outline" style={styles.add} size={35} />
      <Text style={styles.given}>{randomNumber2}</Text>
      <TextInput
        style={styles.textInput}
        value={answer}
        onChangeText={setAnswer}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        disabled={isLoading}
        onPress={() => {
          submitAnswer();
        }}
      >
        <Text>{isLoading ? "Submitting your answer..." : "Answer"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#8ADAB2",
    borderRadius: 20,
    height: 35,
    marginVertical: 10,
    fontSize: 20,
    paddingHorizontal: 10,
    width: "80%",
    textAlign: "center",
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
  given: {
    fontSize: 35,
    fontWeight: "bold",
    color: "grey",
    width: "20%",
    textAlign: "center",
  },
  add: {
    width: "35%",
    color: "grey",
    textAlign: "left",
  },
});
