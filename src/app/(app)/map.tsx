import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Screen from '@/components/screen'
import MapView from 'react-native-maps'
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

const Map = () => {
    return (
        <Screen>
            <View className='flex py-6 px-8'>
                <View className='relative h-full rounded-xl overflow-hidden'>
                    <MapView
                        initialRegion={{
                            latitude: -27.02482,
                            longitude: -64.7292,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <View className='absolute right-4 bottom-4 gap-2'>
                        <View className='bg-white rounded-md'>
                            <Pressable>
                                <View className='flex items-center justify-center w-12 h-12 bg-white rounded-md'>
                                    <Feather name="zoom-in" size={20} color={colors.gray[500]} />
                                </View>
                            </Pressable>
                            <Pressable>
                                <View className='flex items-center justify-center w-12 h-12 bg-white rounded-md'>
                                    <Feather name="zoom-out" size={20} color={colors.gray[500]} />
                                </View>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable>
                                <View className='flex items-center justify-center w-12 h-12 bg-white rounded-md'>
                                    <Feather name="circle" size={20} color={colors.gray[500]} />
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </Screen>
    )
}

export default Map