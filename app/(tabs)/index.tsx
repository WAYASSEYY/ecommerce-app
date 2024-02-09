import { ScrollView, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Categorycontainer from '@/components/category-container';
import Bestselling from '@/components/bestselling';
import Promo from '@/components/promo';
// import { categorycontainer } from '@/components/category-container';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <Categorycontainer/>
      <Promo/>
      <Bestselling/>
      </ScrollView>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    height:"100%",
    // borderWidth:1,
    backgroundColor:"white",
    margin:1,
    padding:16
  },

 
});
