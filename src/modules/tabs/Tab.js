const Tab = (props) => {
    const handleTabClick = () => {
        props.setSelectedTab(props.data);
        props.setRenderer(props.data.renderer);
    };

    return (
        <div
            onClick={handleTabClick}
            className={'tab ' + (props.selectedTabData.id === props.data.id ? 'active' : '')}
        >
            <div className="tabIcon">{props.data.icon}</div>
            <div className="tabLabel">{props.data.label}</div>
        </div>
    );
};

export default Tab;
