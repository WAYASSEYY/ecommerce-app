import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs, router } from 'expo-router';
import { Pressable, StatusBar } from 'react-native';

import Colors from '@/constants/Colors';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <Stack.Screen options={{headerShown: false}}/>
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: ,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />, 
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    // color={}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerTitle: "",
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerRight: () => (
            <Pressable onPress={() => router.push("/cart/cart")}>
              <FontAwesome name="shopping-cart" size={25} color="black" style={{ marginRight: 15 }} />
            </Pressable>
          )
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerRight: () => (
            <Pressable>
              <MaterialIcons name="notifications-none" size={27} color="black" style={{ marginRight: 15 }} />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable>
              <Ionicons name="settings-outline" size={24} color="black" style={{ marginLeft: 15 }} />
            </Pressable>
          )

        }}
      />
    </Tabs>
    </>
  );
}
