import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { EvilIcons } from '@expo/vector-icons';
import Categories from '@/components/categories';


export default function Search() {
  return (
    <View style={styles.searchpage}>
  <ScrollView showsVerticalScrollIndicator={false}>

 
      <View style={styles.searchcontainer}>
        <Text style={styles.searchword}>Search</Text>
      </View>


    <TouchableOpacity activeOpacity={0.6}>
    <View style={styles.searchbutton}>
    <EvilIcons name="search" size={24} color="grey" />
      <Text style={styles.searchtext}>Any woodtype or kind</Text>
    </View>
    </TouchableOpacity>


    <View>
      <Categories/>
    </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchbutton:{
    height:45,
    alignItems:"center",
    borderWidth:1,
    // justifyContent:"center",
    display:"flex",
    flexDirection:"row",
    padding:5,
    borderRadius:7,
    borderColor:"grey ",
    marginTop:20
  },

  searchtext:{
    color:"grey"
  },

  searchcontainer:{
    height:40,
    // borderWidth:1,
    marginTop:15,
    marginBottom:4,
    justifyContent:"center",
    // paddingLeft:3
  },

  searchword:{
    fontWeight:"bold",
    fontSize:30,
    // borderWidth:1
  },

  searchpage: {
  margin:2,
  // borderWidth:1,
  height:"100%",
  backgroundColor:"white",
  padding:8
  },

 
  
});
