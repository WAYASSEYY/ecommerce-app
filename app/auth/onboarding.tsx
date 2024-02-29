import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function OnboardingScreen() {
  return (
    <View>
      <Text>OnboardingScreen</Text>
      <Button title='Next Screen' onPress={() => router.push("/auth/login")}/>
    </View>
  )
}