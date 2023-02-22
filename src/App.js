import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Input from './Input';

import './App.css';

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

const App = () => {
    return (
        <div className="botContainer">
            <Header />
            <Content messages={messages} />
            <Input />
            <Footer />
        </div>
    );
};

export default App;
