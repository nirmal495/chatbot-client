import React from 'react';
import HelpDetails from './HelpDetails';
import HelpQuestion from './HelpQuestion';

const HelpRenderer = (props) => {
    const helpTopics = [
        {
            id: 0,
            question: 'What is the meaning of life?',
            answer: 'The meaning of life is a philosophical question that has been debated for centuries. There is no one definitive answer, as the meaning of life is subjective and varies from person to person. Some people find meaning in their relationships, others in their work or hobbies, while others find it in spirituality or personal growth.',
        },
        {
            id: 1,
            question: 'How do I lose weight?',
            answer: 'Losing weight involves creating a calorie deficit, which means burning more calories than you consume. This can be achieved through a combination of exercise and a healthy diet. Eating a balanced diet that includes plenty of fruits, vegetables, whole grains, and lean protein, and reducing your intake of processed foods, sugary drinks, and high-fat foods can help you lose weight. You can also speak with a healthcare professional or registered dietitian for personalized advice.',
        },
        {
            id: 2,
            question: 'How do I start a business?',
            answer: 'Starting a business requires careful planning and preparation. You should start by conducting market research to identify a viable business idea and then create a business plan that outlines your goals, target market, competition, and financial projections. You will also need to register your business, obtain any necessary licenses and permits, and secure funding. It is a good idea to seek advice from a business mentor, accountant, or lawyer to help you navigate the process.',
        },
        {
            id: 3,
            question: 'What is the capital of the United States?',
            answer: 'The capital of the United States is Washington, D.C.',
        },
        {
            id: 4,
            question: 'How do I improve my communication skills?',
            answer: 'Improving your communication skills involves practicing active listening, speaking clearly and concisely, using appropriate body language, and adapting your communication style to your audience. You can also read books on communication, attend workshops or seminars, and seek feedback from others to identify areas for improvement.',
        },
    ];

    const [selectedQuestion, setSelectedQuestion] = React.useState(-1);
    const [topicDetails, setTopicDetails] = React.useState({});

    const selectTopic = (data) => {
        setSelectedQuestion(data.id);
        setTopicDetails(data);
        props.setDisplayHeaderButtons(true);
    };

    return (
        <div className="helpContainer">
            {selectedQuestion === -1 && (
                <>
                    <div className="card">
                        <div className="img-section">
                            <svg xmlns="http://www.w3.org/2000/svg" height="77" width="76">
                                <path
                                    fillRule="nonzero"
                                    fill="#3F9CBB"
                                    d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z"
                                ></path>
                            </svg>
                        </div>
                        <div className="card-desc">
                            <div className="card-header">
                                <div className="card-title">FAQ's Topics</div>
                            </div>
                            <div className="card-time">About, Contact, Sales</div>
                            <p className="recent">Last Week-36hrs</p>
                        </div>
                    </div>
                    <div className="listCard">
                        <div className="textInputWrapper">
                            <input placeholder="Search" type="text" className="textInput" />
                        </div>
                        <div className="questionList">
                            {helpTopics.map((topic, index) => (
                                <HelpQuestion
                                    setSelectedQuestion={selectTopic}
                                    key={index}
                                    topicData={topic}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
            {selectedQuestion !== -1 && <HelpDetails topicData={topicDetails} />}
        </div>
    );
};

export default HelpRenderer;
