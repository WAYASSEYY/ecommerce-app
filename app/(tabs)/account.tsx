import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileMenu from '@/components/profile-menu';

export default function Account() {
  return (
    <View style={styles.profilecontainer}>
    <ScrollView showsVerticalScrollIndicator={false}> 

    

    <View style={styles.profilecontainer2}>
      <TouchableOpacity activeOpacity={0.5} style={styles.profilephotocontainer}>
      <Image style={styles.profilephoto} source={require("@/assets/images/profilephoto.jpg")}/>
      </TouchableOpacity>

    
      <View style={styles.profilenamecontainer}>
        <Text style={styles.henryrolls}>Henry Rolls</Text>
      <Text style={styles.purchases}>Purchaser</Text>
      </View>



      <TouchableOpacity activeOpacity={0.5} style={styles.iconcontainer}>
      <MaterialCommunityIcons name="pencil-plus-outline" size={24} color="white" />
     </TouchableOpacity>
     

     

    </View>
      <ProfileMenu/>


    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  henryrolls:{
    fontFamily:"PoppinsRegular",
    fontSize:20
  },

  purchases:{
    fontFamily:"PoppinsRegular",
    color:"gray",
    fontSize:15
    // marginTop:
  },

  profilecontainer: {
    // borderWidth:1,
    height:"100%",
    backgroundColor:"white"
    // alignItems:"baseline"
  },

  profilecontainer2:{
    // borderWidth:1,
    marginTop:10,
    margin:5,
    marginLeft:10,
    height:130,
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    borderBottomWidth:1,
    borderColor:"#B2BEB5"
  },
 

  profilephotocontainer:{
    height:90,
    width:90,
  },

  profilephoto:{

    height:"100%",
    width:"100%",
    borderRadius:100

  },

  profilenamecontainer:{
    marginLeft:15
  },
  
  iconcontainer:{
    backgroundColor:"black",
    height:40,
    width:40,
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:110,
  }


});
