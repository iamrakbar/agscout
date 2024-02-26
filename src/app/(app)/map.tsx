import { View, Pressable } from 'react-native'
import React, { useState } from 'react'
import Screen from '@/components/screen'
import MapView, { Marker } from 'react-native-maps'
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import Svg, { Circle } from "react-native-svg"
import { generateRandomCoordinates } from '@/utils/generateRandomCoordinates';

const centerLat = -27.02482;
const centerLng = -64.7292;
const radius = 10000; // in meters
const numPoints = 1000;

const randomCoordinates = generateRandomCoordinates(centerLat, centerLng, radius, numPoints);

const Map = () => {
    const [markers, setMarkers] = useState([]);

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
                        onMapReady={() => setMarkers(randomCoordinates)}
                    >
                        {markers.map((marker, index) => (
                            <Marker
                                key={index}
                                coordinate={{ latitude: marker.lat, longitude: marker.lng }}
                            >
                                <Svg height="100" width="100">
                                    <Circle cx="50" cy="50" r="10" fill={marker.color} fillOpacity={0.5} />
                                </Svg>
                            </Marker>
                        ))}
                    </MapView>
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