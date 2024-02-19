//StAuth10244: I Seo James, 000872976 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AlertBox from "../components/AlertBox";
import axios from "axios";
import PasswordInput from "../components/PasswordInput";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const isValidForm = () => {
    if (!username) {
      setError("Username cannot be empty.");
      return false;
    } else if (!password) {
      setError("Password cannot be empty.");
      return false;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return false;
    }
    return true;
  };

  const register = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(`http://localhost:3000/signup`, {
        username,
        password,
      });
      if (res.data.status === "success") {
        navigation.replace("GameScreen", { username });
      } else {
        setError("Something wrong happened! Please try again later.");
        setIsLoading(false);
      }
    } catch (e) {
      setError("Something wrong happened! Please try again later.");
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "80%" }}>
        <Text style={styles.title}>Register</Text>
        {error && <AlertBox alertText={error} />}
        <Text>Username: </Text>
        <TextInput
          style={styles.textInput}
          value={username}
          onChangeText={setUsername}
        />
        <Text>Password:</Text>
        <PasswordInput
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <Text>Confirm Password:</Text>
        <PasswordInput
          style={styles.textInput}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <TouchableOpacity
          style={styles.button}
          disabled={isLoading}
          onPress={() => {
            if (isValidForm()) {
              register();
            }
          }}
        >
          <Text>{isLoading ? "Registering you..." : "Register"}</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            textAlign: "center",
            marginTop: 7,
            justifyContent: "center",
          }}
        >
          <Text>Already have an account?</Text>
          <TouchableOpacity
            style={{ marginLeft: 5 }}
            onPress={() => {
              navigation.replace("LoginScreen");
            }}
          >
            <Text style={{ color: "#8ADAB2" }}>Login here.</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  title: {
    fontSize: 30,
    marginBottom: 40,
    fontWeight: "bold",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#8ADAB2",
    borderRadius: 20,
    height: 35,
    marginVertical: 10,
    fontSize: 15,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#8ADAB2",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
