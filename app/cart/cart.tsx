import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { productdata } from '@/utils/data'
import { AntDesign } from '@expo/vector-icons'

export default function Cart() {
  return (
    <View style={style.mainview}>
     

     <ScrollView showsVerticalScrollIndicator={false}>
    <View>
        <Text style={style.cartsummarytext}>CART SUMMARY</Text>
    </View> 


    <View style={style.subtotalcard}>
      <Text style={style.subtotaltext}>Subtotal</Text>
      <Text style={style.subtotaltext}>$20M</Text>
    </View> 

    <View style={style.carttextcard}>
      <Text style={style.carttext}>CART (3)</Text>
    </View>


    {productdata.map((item,idx) =>(
    <View style={style.maincartsection}>
      <View style={style.cartsection}>
         <View style={style.cartsectiontextimage}>
              <Image style={style.cartimage} source={item.image}/>
                                                              </View>

        <View style={style.cartsectiontext}>
            <Text style={style.itemname}>{item.name}</Text>
            <Text style={style.itemname}>{item.price}</Text>
            <Text style={style.itemdescription}>{item.description}</Text>
        </View>

        
      </View>

      <View style={style.cartsectionbottom}>

          <View>
            <Text style={style.removetext}>Remove</Text>
            </View>




          <View style={style.subtotalplusandminus}>
            <TouchableOpacity activeOpacity={0.5} style={style.plus}> 
            <Text style={style.subtotalminus}><AntDesign name="minus" size={22} color="white" /></Text>
            </TouchableOpacity>

          <Text style={style.subtotalplusone}>1</Text>

            <TouchableOpacity activeOpacity={0.5} style={style.plus}> 
            
            <Text style={style.subtotalplus}><AntDesign name="plus" size={22} color="white" /></Text>
            </TouchableOpacity>
            </View>
        </View>

      </View>  
    ))}



{/* <View style={style.checkoutcard}> */}
<TouchableOpacity activeOpacity={0.5} style={style.checkoutcard}>
          <Text style={style.checkouttext}>CHECK OUT - $5B</Text>
  {/* </View> */}
  </TouchableOpacity>
  </ScrollView>
    </View>
  )}


const style=StyleSheet.create({

  checkouttext:{
color:"white",
fontWeight:"bold"
  },

  checkoutcard:{
height:60,
borderWidth:1,
justifyContent:"center",
alignItems:"center",
borderRadius:10,
margin:10,
marginTop:40, 
backgroundColor:"black"
  },



subtotalplusandminus:{
display:"flex",
flexDirection:"row",
alignItems:"center"
// paddingHorizontal:10
  },

  subtotalplusone:{
marginHorizontal:10,
fontWeight:"bold"
  },

  plus:{
    height:34,
    width:55,
    // borderWidth:1,
    borderRadius:6,
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"black",
  },
  subtotalplus:{
    color:"white",
    fontSize:30,
  },

  subtotalminus:{
    color:"white",
    fontSize:30
  },


  carttextcard:{
    // borderWidth:1,
    marginTop:20,
    marginLeft:10,
    marginBottom:10
  },

  carttext:{
    fontSize:17,
    color:"gray",
    fontWeight:"bold"
  },
  
  subtotaltext:{
    fontWeight:"bold",
    fontSize:17,

  },

  mainview:{
    backgroundColor:"white",
    height:"100%"
  },
  maincartsection:{
    height:130,
    justifyContent:"center",
    marginVertical:3,
    margin:10,
    padding:3,
    borderBottomWidth:1,
    borderBottomColor:"#B2BEB5"
  },

  cartimage:{
    height:60,
    width:60,
  },

  cartsection:{
    height:70,
    // borderWidth:1,
    display:"flex",
    flexDirection:"row",
    // marginVertical:5,
    alignItems:"center",
    margin:5

  },

  cartsectiontext:{
    // borderWidth:1,
    justifyContent:"center",
    height:40,
    marginLeft:10
  },

  cartsectiontextimage:{
    // borderWidth:1,
    justifyContent:"center"
  },

  cartsectionbottom:{
    display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  height:50,
  // borderWidth:1
  },

  removetext:{
    color:"#D2B48C", 
    fontWeight:"bold"
  },

  plusandminustext:{
    borderWidth:1
  },
  itemname:{
    fontWeight:"bold"
  },

  itemdescription:{
    color:"gray"
  },

  cartsummarytext:{
    fontSize:20,
    // fontWeight:"bold",
    fontFamily:"PoppinsSemiBold",
    marginLeft:10
  },

  subtotalcard:{
    // borderWidth:1,
    margin:10,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:10
  }

})