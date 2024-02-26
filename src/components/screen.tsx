import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Screen = ({ children }) => {
    const insets = useSafeAreaInsets();

    return (
        <View className="flex flex-col">
            {children}
        </View>
    )
}

export default Screen