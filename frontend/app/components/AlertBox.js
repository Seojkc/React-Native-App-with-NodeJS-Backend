import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function AlertBox({alertText}) {
  return (
    <View style={styles.alertBox}>
      <Text style={{fontSize:12, color:"#9F162F"}}>{alertText}</Text>
    </View>
  )
}


const styles= StyleSheet.create({
    alertBox:{
        borderRadius:5,
        backgroundColor:"#f0cccc",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:20,
        height:40
    }
})