import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Promo() {
  return (
    <View style={style.promomainview}>
      {/* <Text>promo</Text> */}
    </View>
  )
}


const style=StyleSheet.create({

    promomainview:{
        height:150,
        // borderWidth:1,
        marginVertical:5,
        backgroundColor:"#F0F0F0",
        borderRadius:10
    }



})