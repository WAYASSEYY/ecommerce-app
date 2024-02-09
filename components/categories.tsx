import { View, Text,StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { categories } from '@/utils/data';

export default function Categories() {
  return (
    <View style={style.mainpage}>

    <View style={style.categoryname}>
      <Text style={style.categorytext}>Categories</Text>
    </View>

    <View style={style.categorysection}>
       
     {categories.map((item,idx)=> (
         <TouchableOpacity activeOpacity={0.5} key={idx} style={style.categoryphotocontainer}> 
         <View style={style.catTextWrap}>
             <Text style={style.catText}>{item.name}</Text>
         </View>
         <View style={style.imageWrap}>
             <Image style={style.image} source={item.image}/> 
         </View>
     </TouchableOpacity> 

    ))}
    </View> 
            


</View>
    
  );
}


const style=StyleSheet.create({

    categoryphotocontainer:{
        height:100,
        width:"49%",
        // borderWidth:2,
        borderRadius:10,
        marginVertical: 4,
        justifyContent:"center",
        display:"flex",
        flexDirection:"row",
        paddingHorizontal: 4,
        alignItems: "center",
        backgroundColor:'#F0F0F0'
    },
    imageWrap:{
        height: "100%",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        // borderWidth:1,
        marginLeft: 4

    },
    image:{
        height:70,
        width:70,
        // borderWidth:1
        
    },

    categorysection:{
        // borderWidth:1,
        marginTop:20,
        height:"100%",
        flexWrap:"wrap",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        // padding:10
        // paddingBottom:00
    },
    
    categoryname:{
        // borderWidth:1,
        marginTop:40,
        // height:40
    },
    categorytext:{
        fontSize:20,
        fontWeight:"bold"
    },
    
    mainpage:{
        // paddingBottom:400
    },
    catText: {
        fontWeight: "500",
        marginTop:50
    },
    catTextWrap: {
        width: "50%"
    }
})