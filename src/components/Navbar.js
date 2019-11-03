import React from 'react';

class PanelNavbar extends React.Component {
    render() {
        return (
            <div className="ui menu centered grid segment raised">
                <a className="item">
                    <i className="home icon" />
                    Home
                </a>
                <a className="item">
                    <i className="mail icon" />
                    Contact
                </a>
                <a className="item">
                    <i className="question icon" />
                    Support
                </a>
            </div>
        );
    }
}

export default PanelNavbar;