const UserMessage = (props) => {
    return (
        <div className="userMsgContainer">
            <div className="userMsgDetails">
                <div className="userMsgIcon">{props.message.from}</div>
                <div className="userMsgTime">
                    {new Date(props.message.timeStamp).toDateString()}
                </div>
            </div>
            <div className="userMsgText">{props.message.text}</div>
        </div>
    );
};

export default UserMessage;
