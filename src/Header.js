const Header = () => {
    return (
        <header className="header">
            <div className="backButton">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                </svg>
            </div>
            <div className="iconContainer">
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <desc></desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"></path>
                    <path d="M10 16h4"></path>
                    <circle cx="8.5" cy="11.5" r=".5" fill="currentColor"></circle>
                    <circle cx="15.5" cy="11.5" r=".5" fill="currentColor"></circle>
                    <path d="M9 7l-1 -4"></path>
                    <path d="M15 7l1 -4"></path>
                </svg>
            </div>
            <div className="botName">Chat bot Name</div>
        </header>
    );
};

export default Header;
