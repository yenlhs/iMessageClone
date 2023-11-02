import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import 'react-native-gesture-handler';

const HomePage = () => {
	return (
		<View className='flex-1 justify-center items-center bg-blue-100'>
			<Text>This is the first page asdf</Text>
			<Link href={'/chat'}>Open Chat</Link>
		</View>
	);
};

export default HomePage;
