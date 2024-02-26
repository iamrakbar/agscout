
import { Link, Slot } from "expo-router";
import { Tabs } from 'expo-router/tabs';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import colors from "tailwindcss/colors";
import { Pressable, View } from "react-native";



export default function AppLayout() {

    return (
        <Tabs initialRouteName="farms"
            screenOptions={{
                headerTitleAlign: "left",
                headerTitleStyle: {
                    fontSize: 24,
                },
                headerRightContainerStyle: {
                    paddingRight: 16,
                },
                tabBarActiveTintColor: colors.teal[500],

            }}
        >
            <Tabs.Screen
                name="farms"
                options={{
                    title: 'Farms',
                    tabBarIcon: ({ color }) => (
                        <Feather name="grid" size={24} color={color} />
                    ),
                    headerRight: () => (
                        <Pressable>
                            <Feather name="plus-circle" size={24} color={colors.gray[500]} />
                        </Pressable>
                    )
                }}
            />
            <Tabs.Screen
                name="map"
                options={{
                    title: 'Map',
                    tabBarIcon: ({ color }) => (
                        <Feather name="map" size={24} color={color} />
                    ),
                    headerRight: () => (
                        <Pressable>
                            <Ionicons name="filter" size={24} color={colors.gray[500]} />
                        </Pressable>
                    )
                }}
            />
            <Tabs.Screen
                name="report"
                options={{
                    title: 'Report',
                    tabBarIcon: ({ color }) => (
                        <Feather name="bar-chart" size={24} color={color} />
                    ),
                    headerRight: () => (
                        <Pressable>
                            <Feather name="filter" size={24} color={colors.gray[500]} />
                        </Pressable>
                    )
                }}
            />
            <Tabs.Screen
                name="scout"
                options={{
                    title: 'Scout',
                    tabBarIcon: ({ color }) => (
                        <Feather name="edit" size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <Feather name="settings" size={24} color={color} />
                    )
                }}
            />
        </Tabs>
    );
}