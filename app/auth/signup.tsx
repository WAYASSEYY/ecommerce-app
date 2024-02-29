import { View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { Stack, router } from 'expo-router'

export default function Signup() { 
  const [fullname, setFullname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  async function onLogin() {
    
    //check if user exists
    // const user = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
    // if(user) return Alert.alert('Failed', "Sorry user already exist.")
  
    return router.replace('/(tabs)/')
  }

  console.log('Email:', email);

  return (
    <>
     <Stack.Screen options={{title: "", }}/>
    <View>
      <View className="bg-white h-full ">


<View className=" mt-10 ml-10">
<Text className="text-4xl text-[#BB165E] ">Sign Up!</Text>
<Text className="text-xl text-[#808080] ">Create a new account</Text>
</View>

<View className=" ml-10 mt-16 border-b py-4 w-80">
<TextInput
  // style={tailwind('bg-gray-100 p-2 mb-2')}
  placeholder="Username"
  placeholderTextColor="#A0AEC0"
/>
</View>
<View className=" m-5 ml-10 mt-10 border-b py-4 w-80">
<TextInput
  // style={tailwind('bg-gray-100 p-2 mb-2')}
  placeholder="Email"
  placeholderTextColor="#A0AEC0" onChangeText={(text: string) => setEmail(text)}
/>
</View>

<View className=" m-5 ml-10 mt-10 border-b py-4 w-80">
  <TextInput
  // style={useTailwind('bg-gray-100 p-2')}
  placeholder='Password'
  placeholderTextColor="#A0AEC0"
  secureTextEntry={true} onChangeText={(text: string) => setPassword(text)}
  />
</View>

<View className="flex items-center pt-20">
<TouchableOpacity activeOpacity={0.5} className=" flex items-center w-80 py-4 bg-[#BB165E] rounded-md ">
  <Text className="text-white font-semibold">Sign Up</Text>
</TouchableOpacity>

{/* <TouchableOpacity activeOpacity={0.5}>
  <Text className=" font-semibold pt-5">Forgot Password?</Text>
</TouchableOpacity> */}
</View>


<View className=" flex flex-row justify-center mt-8 ">
  {/* <TouchableOpacity activeOpacity={0.5}> */}
  <Text className="text-[#808080]">Already have an account?</Text>
  {/* </TouchableOpacity> */}

  <TouchableOpacity activeOpacity={0.5} className="mx-2">
  <Text  onPress={() => router.push("/auth/login")} className="text-[#BB165E]">Sign in</Text>
  </TouchableOpacity>
</View>
</View>
    </View>
    </>
  )
}