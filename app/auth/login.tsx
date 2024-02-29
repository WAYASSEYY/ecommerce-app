import React, { useState } from 'react'
import { Stack, router } from 'expo-router'
import { useTailwind } from 'nativewind'
import { View, Text, TouchableOpacity, TextInput, Button, Alert,  } from 'react-native'

const users = [
  {name: "Henry", email: "hof@gmail.com", password: "123456"}
]

export default function Login() { 
  // const [users, setUsers] = useState<any[]>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  function onLogin() {
    //check if user exists
    const user = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
    if(!user) return Alert.alert('Failed', "Sorry user does not exist. Check and try again.") 

    //check for password match
    const isMatch = users.find((user) => user.password === password);
    if(!isMatch) return Alert.alert('Failed', "Sorry invalid email or password. Check and try again.")

    return router.replace('/(tabs)/')
  }

  console.log('Email:', email);


  
  return (
    <>
     <Stack.Screen options={{title: "", }}/>
     <View className="bg-white h-full ">


      <View className=" mt-20 ml-8">
      <Text className="text-4xl text-[#BB165E] ">Welcome!</Text>
      <Text className="text-xl text-[#808080] ">Sign in to continue</Text>
      </View>

      <View className=" m-5 mt-14 border-b py-4 w-80 ml-10">
      <TextInput
        placeholder="Email"
        placeholderTextColor="#A0AEC0" onChangeText={(text: string) => setEmail(text)}
      />
      </View>

      <View className=" m-5 mt-14 border-b py-4 w-80 ml-10">
        <TextInput
        placeholder='Password'
        placeholderTextColor="#A0AEC0"
        secureTextEntry={true} onChangeText={(text: string) => setPassword(text)}
        />
      </View>

      <View className="flex items-center pt-12 my-5">
      <TouchableOpacity onPress={onLogin} activeOpacity={0.5} className=" flex items-center mt-5 w-80 py-4 bg-[#BB165E] rounded-md ">
        <Text className="text-white font-semibold">LOG IN</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.5}>
        <Text className=" font-semibold pt-5">Forgot Password?</Text>
      </TouchableOpacity>
      </View>

      <View className=" flex flex-row justify-center mt-6 ">
        <Text className="text-[#808080]">Don't have an account?</Text>
        <TouchableOpacity className="mx-2" activeOpacity={0.5}>
          <Text onPress={() => router.push("/auth/signup")} className="text-[#BB165E]">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
   
  )
}