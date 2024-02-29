import { View, Text, Button, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, router, useNavigation } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function Screen() {
  return (
   <>
   <StatusBar style='dark'/>
   <Stack.Screen options={{title: "", headerShown: false }}/>
    <View className="w-full h-full flex flex-col justify-center items-center bg-white">
        <Image className="h-72 w-64" source={require("@/assets/images/un.png")} alt='' />

        <View className="flex justify-center items-center my-2">
          <Text className=" font-semibold text-xl leading-10">WELCOME</Text>
          <Text className="text-sm text-gray-600">Best marketplace for all your hardware, electrical and plumbing materials. Enjoy shopping with us.</Text>
        </View>

      <View className="my-5">
        <TouchableOpacity onPress={() => router.replace("/auth/login")} activeOpacity={0.5} className="bg-[#BB165E] py-4 px-3 w-80 justify-center items-center rounded-md">
          <Text className="text-white font-semibold">LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/auth/signup")} activeOpacity={0.5} className="border border-[#BB165E] my-4 py-4 px-3 flex justify-center items-center rounded-md">
          <Text className="text-[#BB165E] font-semibold">SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
   </>
  )
}