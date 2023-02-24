const HelpDetails = (props) => {
    return (
        <div className="helpDetailsContainer">
            <div className="helpHeader">{props.topicData.question}</div>
            <div className="helpSolution">{props.topicData.answer}</div>
        </div>
    );
};

export default HelpDetails;
