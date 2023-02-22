import BotIcon from './Icons/BotIcon';
import LeftArrow from './Icons/LeftArrow';

const Header = (props) => {
    return (
        <header className="header">
            {!props.selectedTabData.showTabs && (
                <div className="backButton" onClick={props.renderPreviousTab}>
                    <LeftArrow />
                </div>
            )}
            <div className="iconContainer">
                <BotIcon />
            </div>
            <div className="botName">Chat bot Name</div>
        </header>
    );
};

export default Header;
