import { View, Text, StyleSheet, StatusBar, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      icon:<Entypo name="wallet" size={30} color="black" />,
      title: 'My Wallet',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      icon:<Feather name="box" size={30} color="black" />,
      title: 'My Orders',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29lld72',
      icon:<FontAwesome name="money" size={30} color="black" />,
      title: 'Payment Methods',
    },
    {
        id: '58694a0f-3da1-471f-bd96-14557hh1e29d72',
        icon:<FontAwesome6 name="location-dot" size={30} color="black" />,
        title: 'Delivery Address',
      },
      {
        id: '58694a0f-3da1-471f-bd96-14557dccc1e29d72',
        icon:<AntDesign name="gift" size={30} color="black" />,
        title: 'Promo Codes & Gift Cards',
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455fff71e29d72',
        icon:<MaterialIcons name="logout" size={30} color="black" />,
        title: 'Logout',
      }, 
  ];
  
  type ItemProps = {title: string, icon:any};
  
  const Item = ({title,icon}: ItemProps) => (
    <TouchableOpacity activeOpacity={0.5} style={styles.item}>

        <View style={styles.cc}>
        {icon}
      <Text style={styles.title}>{title}</Text>
        </View>
      <Entypo name="chevron-right" size={24} color="black" />

    </TouchableOpacity>
  );

export default function ProfileMenu() {
  return (
      <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} icon={item.icon} />}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
    container: {
    //  borderWidth:1
    },
    item: {
      backgroundColor: 'white',
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 16,
      borderBottomWidth:1,
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      borderColor:"#B2BEB5",
      justifyContent:"space-between",
    //   width:"100%"
    },
    title: {
      fontSize: 18,
      fontFamily:"PoppinsRegular",
    //   borderWidth:1,
      marginLeft:15
    //   borderWidth:1
    },
    cc:{
        display:"flex",
      flexDirection:"row",
      alignItems:"center",
    }
  });