import "../global.css";
import { useEffect, useState } from "react";
import { Slot, SplashScreen } from 'expo-router';
import { StatusBar } from "expo-status-bar";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider, DefaultTheme } from '@react-navigation/native';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    },
};

SplashScreen.preventAutoHideAsync();

export default function Layout() {

    const [isReady, setReady] = useState(false);

    useEffect(() => {
        // Perform some sort of async data or asset fetching.
        setTimeout(() => {
            // When all loading is setup, unmount the splash screen component.
            SplashScreen.hideAsync();
            setReady(true);
        }, 300);
    }, []);

    return (
        <ThemeProvider value={MyTheme}>
            <SafeAreaProvider>
                <StatusBar style="dark" />
                <Slot />
            </SafeAreaProvider >
        </ThemeProvider>
    );
}