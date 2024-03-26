import Footer from './modules/common/Footer';
import Header from './modules/common/Header';

import './App.css';
import Chat from './Icons/Chat';
import Help from './Icons/Help';
import React from 'react';
import ChatContainer from './modules/chat/ChatContainer';
import HelpRenderer from './modules/help/HelpRenderer';
import Tab from './modules/tabs/Tab';
import TabContent from './modules/tabs/TabContent';
import Code from './Icons/Code';
import CodeRenderer from './modules/code/CodeRenderer';

const App = () => {
    const [prevTabData, setPrevTabData] = React.useState({});

    const [isExpanded, setIsExpanded] = React.useState(false);

    React.useEffect(() => {
        if (isExpanded) {
        }
    }, [isExpanded]);

    const tabs = [
        {
            id: 'chat',
            label: 'Chat',
            icon: <Chat />,
            renderer: <ChatContainer />,
            showTabs: false,
        },
        {
            id: 'help',
            label: 'Help',
            icon: <Help />,
            renderer: <HelpRenderer />,
            showTabs: true,
        },
        {
            id: 'code',
            label: 'Code',
            icon: <Code />,
            renderer: <CodeRenderer />,
            showTabs: false,
        },
    ];

    const [selectedTabData, setSelectedTab] = React.useState(tabs[1]);

    const renderPreviousTab = () => {
        if (Object.keys(prevTabData).length) {
            setSelectedTab(prevTabData);
        }
    };

    const renderNextTab = (data) => {
        setPrevTabData(selectedTabData);
        setSelectedTab(data);
    };

    return (
        <div className={'botContainer ' + (isExpanded ? 'expanded' : '')}>
            <Header
                selectedTabData={selectedTabData}
                renderPreviousTab={renderPreviousTab}
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
            />
            <TabContent selectedTabData={selectedTabData} />
            {selectedTabData.showTabs && (
                <div className="tabsContainer">
                    {tabs.map((tabData, index) => (
                        <Tab
                            key={index}
                            data={tabData}
                            selectedTabData={selectedTabData}
                            setSelectedTab={renderNextTab}
                        />
                    ))}
                </div>
            )}
            <Footer />
        </div>
    );
};

export default App;
