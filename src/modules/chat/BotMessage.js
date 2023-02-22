const BotMessage = (props) => {
    return (
        <div className="botMsgContainer">
            <div className="botMsgDetails">
                <div className="botMsgIcon">{props.message.from}</div>
                <div className="botMsgTime">{new Date(props.message.timeStamp).toDateString()}</div>
            </div>
            <div className="botMsgText">{props.message.text}</div>
        </div>
    );
};

export default BotMessage;
