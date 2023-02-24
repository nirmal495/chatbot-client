const HelpQuestion = (props) => {
    const handleHelpClick = () => {
        props.setSelectedQuestion(props.topicData);
    };
    return (
        <div className="questionContainer" onClick={handleHelpClick}>
            {props.topicData.question}
        </div>
    );
};

export default HelpQuestion;
