import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat, OverlayProvider } from 'stream-chat-expo';

const API_KEY = 's8w8bcuf9xt3';
const client = StreamChat.getInstance(API_KEY);

export default function ChatLayout() {
	useEffect(() => {
		const connectUser = async () => {
			await client.connectUser(
				{
					id: 'adrian',
					name: 'Adrian',
					image: 'https://i.imgur.com/fR9Jz14.png',
				},
				client.devToken('adrian')
			);

			const channel = client.channel('livestream', 'public', { name: 'Public' });
			await channel.create();
		};
		connectUser();

		return () => {
			client.disconnectUser();
		};
	}, []);

	return (
		<OverlayProvider>
			<Chat client={client}>
				<Stack>
					<Stack.Screen name='index' options={{ title: 'Messages' }} />
				</Stack>
			</Chat>
		</OverlayProvider>
	);
}
