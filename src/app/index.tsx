import Screen from '@/components/screen';
import { Button, Image, Keyboard, KeyboardAvoidingView, Pressable, ScrollView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <Screen>
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}>

                <View className='flex h-full justify-center p-8 gap-8'>
                    <Image source={require('../assets/images/logo.png')} width={80} height={69} className='mx-auto' />
                    <Text className='text-xl text-center font-medium '>
                        Sign up for New Account
                    </Text>
                    <View className='border border-gray-300 rounded-xl overflow-hidden'>
                        <View className='relative flex flex-row border-b border-gray-300'>
                            <TextInput className='h-16 w-full pl-16' placeholder='Full Name' placeholderTextColor={colors.gray[500]} />
                            <Feather name="user" size={20} color={colors.gray[500]} className='absolute top-5 left-5' />
                        </View>
                        <View className='relative flex flex-row border-b border-gray-300'>
                            <TextInput className='h-16 w-full pl-16' placeholder='Email Address' placeholderTextColor={colors.gray[500]} />
                            <Feather name="mail" size={20} color={colors.gray[500]} className='absolute top-5 left-5' />
                        </View>
                        <View className='relative flex flex-row border-b border-gray-300'>
                            <TextInput className='h-16 w-full pl-16' placeholder='Phone Number' placeholderTextColor={colors.gray[500]} />
                            <Feather name="phone" size={20} color={colors.gray[500]} className='absolute top-5 left-5' />
                        </View>
                        <View className='relative flex flex-row border-b border-gray-300'>
                            <TextInput className='h-16 w-full pl-16' placeholder='Password' secureTextEntry placeholderTextColor={colors.gray[500]} />
                            <Feather name="lock" size={20} color={colors.gray[500]} className='absolute top-5 left-5' />
                        </View>
                        <View className='relative flex flex-row'>
                            <TextInput className='h-16 w-full pl-16' placeholder='Retype Password' secureTextEntry placeholderTextColor={colors.gray[500]} />
                            <Feather name="check" size={20} color={colors.gray[500]} className='absolute top-5 left-5' />
                        </View>
                    </View>
                    <Link href="/farms" asChild>
                        <Pressable className='flex items-center justify-center bg-teal-500 p-4 rounded-xl active:opacity-70'>
                            <Text className='text-white font-medium'>
                                Sign Up
                            </Text>
                        </Pressable>
                    </Link>
                    <Text className='text-center'>Or continue with</Text>
                    <View className='flex flex-row  gap-4'>
                        <Link href="/farms" asChild>
                            <Pressable className='flex-1 flex flex-row items-center justify-center gap-2 border border-gray-300 p-4 rounded-xl active:opacity-70'>
                                <Ionicons name="logo-google" size={20} color={colors.gray[500]} />
                                <Text className=' font-medium'>
                                    Sign Up
                                </Text>
                            </Pressable>
                        </Link>
                        <Link href="/farms" asChild>
                            <Pressable className='flex-1 flex flex-row items-center justify-center gap-2 border border-gray-300 p-4 rounded-xl active:opacity-70'>
                                <Ionicons name="logo-apple" size={20} color={colors.gray[500]} />
                                <Text className=' font-medium'>
                                    Apple Sign Up
                                </Text>
                            </Pressable>
                        </Link>
                    </View>
                    <Link href="/farms" asChild>
                        <Pressable className='flex flex-row gap-2 justify-center active:opacity-70'>
                            <Text>Already have an account?</Text>
                            <Text className='text-teal-500'>Sign In</Text>
                        </Pressable>
                    </Link>
                </View >
            </TouchableWithoutFeedback >
        </Screen >
    );
}