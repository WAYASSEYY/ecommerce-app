import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { categories, productdata } from '@/utils/data'

export default function Bestselling() {
  return (
    <View style={style.bestsellingmainview}>
      {/* <Text>bestselling</Text> */}

    <View style={style.cc}>
        <Text style={style.cctext}>Best Selling</Text>
        <Text style={style.cctext2}>View all</Text>
    </View>

    <View style={style.bestsellingsection}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={style.cc}>

{categories.map((item,idx)=> (
  
  <TouchableOpacity activeOpacity={0.5} key={idx} style={style.section} > 
     <View> 
     <View style={style.imagecard} >
      <Image style={style.image} source={item.image}/>
    </View>

    <View style={style.imagetextcard}>
      <Text style={style.imagetext}>{item.name}</Text>
    </View>

    <View style={style.imagepricecard}>
      <Text style={style.imagepricetext}>{item.price}</Text>
    </View>
    </View>

 </TouchableOpacity> 

))}
</View>
</ScrollView> 
    </View>

    </View>
  )
}

const style=StyleSheet.create({

    imagetext:{
        // fontWeight:"bold"
        fontFamily:"PoppinsMedium",
        // fontSize:18
      },

    imagetextcard:{
        // borderWidth:1,
        alignItems:"center",
        marginTop:5,
        // marginLeft:5
      },
      imagepricetext:{
        color:"gray",
        fontFamily:"PoppinsMedium",
        fontSize:15
      },
    

    image:{
        height:120,
        width:120
        },

    imagecard:{
        // height:
        // borderWidth:1,
        marginTop:3,
        marginRight:3,
        borderRadius:10,
        height:150,
        width:200,
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"#D3D3D3"
      },
      
      section:{},
      imagepricecard:{
        // marginLeft:5
        alignItems:"center",
        // borderWidth:1
      },

    bestsellingsection:{
        // borderWidth:1,
        // height:"100%",
        borderRadius:10,
        marginTop:15,
    },

    bestsellingmainview:{
        
        borderRadius:10,
        marginVertical:25,
        // borderWidth:1
    },

    cc:{
        // borderWidth:1,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },

    cctext:{
        // fontWeight:"bold",
        fontSize:20,
        fontFamily:"PoppinsMedium"
    },

    cctext2:{
        color:"gray",
        fontFamily:"PoppinsMedium"
    }
})