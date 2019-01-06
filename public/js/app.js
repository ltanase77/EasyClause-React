class PanelDashboard extends React.Component {
    render() {
        return(
            <div>
                <PanelNavbar />
                <PanelContent />
                <PanelFooter />
            </div>
        );
    }
}

class PanelNavbar extends React.Component {
    render() {
        return(
            <div className='ui menu centered grid'>
                    <a className='item'><i className="home icon"></i>Home</a>
                    <a className='item'><i className="mail icon"></i>Contact</a>
                    <a className='item'><i className="support icon"></i>Support</a>
            </div>
        )
    }

}

class PanelContent extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="column">
                    <h2 className='ui header grid centered'>Welcome to Clause Generator App</h2>
                </div>
            </div>
        )
    }
}

class PanelFooter extends React.Component {
    render() {
        return(
            <div className="ui vertical footer segment">
                <div className="ui container grid centered">
                    EasyConsult<span> 2019 </span>. All Rights Reserved
                </div>
            </div>
        )
    }
}

ReactDOM.render(<PanelDashboard/>, document.getElementById("app"));
