import { useState } from 'react';
import { ChannelList, Channel, MessageList, MessageInput } from 'stream-chat-expo';
import { Channel as ChannelType } from 'stream-chat';
const ChatScreen = () => {
	const [channel, setChannel] = useState<ChannelType>();

	if (channel) {
		return (
			<Channel channel={channel}>
				<MessageList />
				<MessageInput />
			</Channel>
		);
	}
	return <ChannelList onSelect={(channel) => setChannel(channel)} />;
};

export default ChatScreen;
