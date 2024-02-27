import React from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import Screen from '@/components/screen'

const DATA = [...Array(10).keys()];

const Farms = () => {
    return (
        <Screen>
            <View className="flex">
                <FlatList
                    data={DATA}
                    renderItem={(i) => (
                        <Pressable className='mx-8 p-4 mb-6 border-2 border-gray-100 rounded-xl active:opacity-70'>
                            <View className='flex flex-row justify-between'>
                                <Text className='text-2xl'>Graneros</Text>
                                <Feather name="info" size={24} color={colors.gray[300]} />
                            </View>
                            <View className='flex flex-row justify-between gap-4 mt-4'>
                                <Link href="/" asChild>
                                    <View className='flex-1 flex flex-row gap-2 bg-teal-50 p-3 border border-teal-200 rounded-xl'>
                                        <Feather name="map" size={16} color={colors.teal[500]} />
                                        <Text>Map</Text>
                                    </View>
                                </Link>
                                <Link href="/" asChild>
                                    <View className='flex-1 flex flex-row gap-2 bg-teal-50 p-3 border border-teal-200 rounded-xl'>
                                        <Feather name="file-text" size={16} color={colors.teal[500]} />
                                        <Text>Data</Text>
                                    </View>
                                </Link>
                                <Link href="/" asChild>
                                    <View className='flex-1 flex flex-row gap-2 bg-teal-50 p-3 border border-teal-200 rounded-xl'>
                                        <Feather name="activity" size={16} color={colors.teal[500]} />
                                        <Text>Plots</Text>
                                    </View>
                                </Link>
                            </View>
                        </Pressable>
                    )}
                    contentContainerStyle={{ paddingTop: 24 }}
                />
            </View>
        </Screen>
    )
}

export default Farms