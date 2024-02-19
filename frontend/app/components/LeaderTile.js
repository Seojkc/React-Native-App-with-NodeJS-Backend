import { View, Text } from 'react-native'
import React from 'react'

export default function LeaderTile({leader, index}) {

    const getColor=()=>{
        if(index===0){
            return "#AF9500"
        }else if(index ===1){
            return "#B4B4B4"
        }else if(index ===2){
            return "#AD8A56"
        }else{
            return "#F8FFD2"
        }
    }
  return (
    <View style={{backgroundColor:getColor(), marginTop:10,padding:5, borderRadius:10}}>
      <Text style={{fontSize:17}}>{index + 1} - {leader}</Text>
    </View>
  )
}