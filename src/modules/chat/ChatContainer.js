import Content from './Content';
import Input from './Input';

const messages = [
    {
        type: 'bot',
        text: 'How can I help you?',
        from: 'kAIron',
        timeStamp: Date.now(),
    },
    {
        type: 'user',
        text: 'Which is fastest land animal?',
        from: 'You',
        timeStamp: Date.now(),
    },
    {
        type: 'bot',
        text: 'Cheetah is the fastest land animal.',
        from: 'kAIron',
        timeStamp: Date.now(),
    },
];

const ChatContainer = () => {
    return (
        <>
            <Content messages={messages} />
            <Input />
        </>
    );
};

export default ChatContainer;
