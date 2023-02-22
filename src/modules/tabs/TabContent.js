const TabContent = (props) => {
    return (
        <div
            className={
                'tabContentContainer ' + (props.selectedTabData.showTabs ? '' : 'extraHeight')
            }
        >
            {props.selectedTabData.renderer}
        </div>
    );
};

export default TabContent;
