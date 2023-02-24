import BotIcon from '../../Icons/BotIcon';
import CollapseIcon from '../../Icons/CollapseIcon';
import ExpandIcon from '../../Icons/ExpandIcon';
import LeftArrow from '../../Icons/LeftArrow';

const Header = (props) => {
    const toggleClient = () => {
        props.setIsExpanded(!props.isExpanded);
    };
    return (
        <header className="header">
            {(!props.selectedTabData.showTabs || props.displayHeaderButtons) && (
                <div className="backButton" onClick={props.renderPreviousTab}>
                    <LeftArrow />
                </div>
            )}
            <div className="iconContainer">
                <BotIcon />
            </div>
            <div className="botName">Chat bot Name</div>
            <div className="clientActionBtn" onClick={toggleClient}>
                {props.displayHeaderButtons &&
                    (props.isExpanded ? <CollapseIcon /> : <ExpandIcon />)}
            </div>
        </header>
    );
};

export default Header;
