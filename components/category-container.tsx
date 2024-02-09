import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { productdata } from '@/utils/data'

export default function Categorycontainer() {
  return (
  <View style={style.categorycontainermainview}>
     <View>
      <View style={style.heyhenrycard}>
      <Text style={style.heyhenrytext}>Hey, Henry</Text>
      </View>

      <View style={style.heyhenrycard2}>
      <Text style={style.heyhenrytext2}>Find your best products at your finger</Text>
      </View>
    
      <View style={style.categoryandviewcard}>
      <Text style={style.categoriestext} >Categories</Text>
      <Text style={style.viewalltext}>View all </Text>
      </View>
    </View>

      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={style.cc}>

    {productdata.map((item,idx)=> (
      
      <TouchableOpacity activeOpacity={0.5} key={idx} style={style.section} > 
         <View> 
         <View style={style.imagecard} >
          <Image style={style.image} source={item.image}/>
        </View>

        <View style={style.imagetextcard}>
          <Text style={style.imagetext}>{item.name}</Text>
        </View>

        <View style={style.descriptioncard}>
          <Text style={style.descriptiontext}>{item.description}</Text>
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
  )
}


const style=StyleSheet.create({

  descriptioncard:{
    // borderWidth:1,
    // height:10
  },

  descriptiontext:{
    // borderWidth:1,
    fontFamily:"PoppinsMedium",
    marginHorizontal:15
    // color:"gray"
    // height:10
  },

  cc:{
    display:"flex",
    flexDirection:"row",    
    // borderWidth:1,
    // margin:5,
    height:200,
    marginTop:10
  },

  section:{
    // borderWidth:1,
    // height:100,
    // margin:5,

    // display:"flex",
    // flexDirection:"row",
  },
  imagecard:{
    // height:
    // borderWidth:1,
    marginTop:3,
    marginRight:3,
    borderRadius:10,
    height:133,
    width:153,
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"#F0F0F0",
    marginHorizontal:10
  },

  imagetextcard:{
    // borderWidth:1,
    // alignItems:"center"
    marginTop:5,
    // marginHorizontal:5,
    // marginLeft:5
  },
  imagetext:{
    // borderWidth:1,

    // paddingLeft:,
    marginHorizontal:15,
    fontFamily:"PoppinsMedium"
  },
  imagepricecard:{
    // marginLeft:5,
    // borderWidth:1
  },
  imagepricetext:{
    color:"gray",
    // paddingLeft:7,
    fontFamily:"PoppinsMedium",
    fontSize:15,
    marginHorizontal:15,
    // borderWidth:1
  },

  image:{
  height:130,
  width:150,
  borderRadius:10
  },
  categoryandviewcard:{
    // borderWidth:1,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:20,
    marginLeft:5,
    marginRight:5,
    alignItems:"center"
  },

  categoriestext:{
    fontWeight:"bold",
    fontSize:20,
    fontFamily:"PoppinsMedium"
    // borderWidth:1
  },

  viewalltext:{
    color:"gray",
    // fontWeight:"bold",
    fontFamily:"PoppinsMedium"
  },

  heyhenrycard:{
    // borderWidth:1,
      marginLeft:10,
      marginTop:20,
      marginBottom:1,
      marginRight:5,

  },
  heyhenrycard2:{
  // borderWidth:1,
  fontFamily:"PoppinsBold",
  
  marginLeft:5,
  marginRight:5
  },
  
  heyhenrytext:{
    fontSize:25,
    fontFamily:"PoppinsMedium"
  },

  heyhenrytext2:{
    color:"gray",
    fontFamily:"PoppinsMedium"
  },
  

  categorycontainermainview:{
    // borderWidth:1,
    height:370

  },

  categorysection:{
    // margin:1,
    // height:100
  },


})