import { View, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Screen from '@/components/screen'
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import MapView from 'react-native-maps'

import { generateRandomCoordinates } from '@/utils/generateRandomCoordinates';
import { MarkerItem } from '@/components/MarkerItem';

const centerLat = -27.02482;
const centerLng = -64.7292;
const radius = 10000; // in meters
const numPoints = 1000;

const initialRegion = {
    latitude: centerLat,
    longitude: centerLng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

const randomCoordinates = generateRandomCoordinates(centerLat, centerLng, radius, numPoints);

const Map = () => {
    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const [mapReady, setMapReady] = useState(false);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        if (mapReady) {
            setMarkers(randomCoordinates);
        }
    }, [mapReady, setMarkers]);

    return (
        <Screen>
            <View className='flex py-6 px-8'>
                <View className='relative h-full rounded-xl overflow-hidden'>
                    <MapView
                        ref={mapRef}
                        initialRegion={initialRegion}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        onMapReady={() => setMapReady(true)}
                    >
                        {markers.map((marker, index) => <MarkerItem key={index} ref={markerRef} marker={marker} />)}
                    </MapView>
                    <View className='absolute right-4 bottom-4 gap-2'>
                        <View className='bg-white rounded-md'>
                            <Pressable className='active:opacity-70'>
                                <View className='flex items-center justify-center w-12 h-12 bg-white rounded-md'>
                                    <Feather name="zoom-in" size={20} color={colors.gray[500]} />
                                </View>
                            </Pressable>
                            <Pressable className='active:opacity-70'>
                                <View className='flex items-center justify-center w-12 h-12 bg-white rounded-md'>
                                    <Feather name="zoom-out" size={20} color={colors.gray[500]} />
                                </View>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable className='active:opacity-70'>
                                <View className='flex items-center justify-center w-12 h-12 bg-white rounded-md'>
                                    <Feather name="circle" size={20} color={colors.gray[500]} />
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </Screen >
    )
}

export default Map