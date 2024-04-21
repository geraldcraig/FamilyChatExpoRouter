import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
        <Tabs.Screen
            name="gallery"
            options={{
                title: 'Gallery',
                tabBarIcon: ({ color }) =>  <Ionicons name="images-outline" size={24} color="black"/>,
            }}
        />
        <Tabs.Screen
            name="calendar"
            options={{
                title: 'Calendar',
                tabBarIcon: ({ color }) =>  <Ionicons name="calendar-outline" size={24} color="black"/>
            }}
        />
        <Tabs.Screen
            name="groups"
            options={{
                title: 'Groups',
                tabBarIcon: ({ color }) => <Ionicons name="people-outline" size={24} color="black"/>,
            }}
        />
      <Tabs.Screen
        name="index"
        options={{
            title: 'Chats',
            tabBarIcon: ({ color }) => <Ionicons name="chatbox-ellipses-outline" size={24} color="black"/>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={24} color="black"/>,
            headerRight: () => (
                <Link href="/modal" asChild>
                    <Pressable>
                        {({ pressed }) => (
                            <FontAwesome
                                name="info-circle"
                                size={25}
                                color={Colors[colorScheme ?? 'light'].text}
                                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                            />
                        )}
                    </Pressable>
                </Link>
            ),
        }}
      />
    </Tabs>
  );
}
