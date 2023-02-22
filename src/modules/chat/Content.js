import BotMessage from './BotMessage';
import UserMessage from './UserMessage';

const Content = (props) => {
    return (
        <div className="contentDiv">
            {props.messages.map((message, index) => {
                if (message.type === 'user') {
                    return <UserMessage key={index} message={message} />;
                } else if (message.type === 'bot') {
                    return <BotMessage key={index} message={message} />;
                }
                return undefined;
            })}
        </div>
    );
};

export default Content;
