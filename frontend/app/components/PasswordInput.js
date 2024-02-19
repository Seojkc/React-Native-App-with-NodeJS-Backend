import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PasswordInput({style, value, onChangeText, showPassword,setShowPassword}) {
  return (
    <View style={{ position: "relative" }}>
          <TextInput
            style={style}
            value={value}
            secureTextEntry={showPassword}
            onChangeText={onChangeText}
          />
          <TouchableOpacity
            style={{ position: "absolute", right: 15, top: 15 }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "md-eye" : "md-eye-off"}
              size={24}
              color="grey"
            />
          </TouchableOpacity>
        </View>
  )
}