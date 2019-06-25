class PanelDashboard extends React.Component {
    state = {
        data: {
            EN: {
                title: "Welcome to EasyClause ",
                description: "This applications helps the user to choose and edit various legal clauses",
                langChoice: "Choose your language:",
                btnText: ["English", "Romanian"],
            },

            RO: {
                title: "Bine ati venit la EasyClause",
                description: "Acesta aplicatie ajuta utilizatorul sa aleaga si sa editeze diferite clauze contractuale",
                langChoice: "Alegeti limba:",
                btnText: ["Engleza", "Romana"],
            },
        },
    };

    render() {
        return (
            <div>
                <PanelNavbar />
                <PanelContent data={this.state.data} />
                <PanelFooter />
            </div>
        );
    }
}

class PanelNavbar extends React.Component {
    render() {
        return (
            <div className="ui menu centered grid">
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

class PanelContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEn: true,
        };
        this.handleLanguage = this.handleLanguage.bind(this);
    }
    handleLanguage(lang) {
        if (lang === "Romanian" || lang === "Romana") {
            this.setState({isEn: false});
        } else {
            this.setState({isEn: true});
        }
    }
    render() {
        if (this.state.isEn) {
            return (
                <div>
                    <div className="page-header">
                        <h2 className="title">{this.props.data.EN.title}</h2>
                    </div>
                    <h3 className="ui center aligned header">{this.props.data.EN.langChoice}</h3>
                    <div className="lang-options">
                        <BtnLang text={this.props.data.EN.btnText[0]} changeLang={this.handleLanguage} />
                        <BtnLang text={this.props.data.EN.btnText[1]} changeLang={this.handleLanguage} />
                    </div>
                    <div className="jum">
                        <p className="intro">{this.props.data.EN.description}</p>
                    </div>
                    <ClausesSelection />
                </div>
            );
        } else {
            return (
                <div>
                    <div className="page-header">
                        <h2 className="title">{this.props.data.RO.title}</h2>
                    </div>
                    <h3 className="ui center aligned header">{this.props.data.RO.langChoice}</h3>
                    <div className="lang-options">
                        <BtnLang text={this.props.data.RO.btnText[0]} changeLang={this.handleLanguage} />
                        <BtnLang text={this.props.data.RO.btnText[1]} changeLang={this.handleLanguage} />
                    </div>
                    <div className="jum">
                        <p className="intro">{this.props.data.RO.description}</p>
                    </div>
                    <ClausesSelection />
                </div>
            );
        }
    }
}

class BtnLang extends React.Component {
    constructor(props) {
        super(props);
        this.changeLanguage = this.changeLanguage.bind(this);
    }
    changeLanguage(e) {
        const lang = e.target.textContent;
        this.props.changeLang(lang);
    }
    render() {
        return (
            <button type="button" className="btn-lang" onClick={this.changeLanguage}>
                {this.props.text}
            </button>
        );
    }
}

class ClausesSelection extends React.Component {
    render() {
        return (
            <select className="ui fluid selection dropdown">
                <i className="dropdown icon"></i>
                <option>Select Clause</option>
                <option value="arbitration">Arbitration</option>
                <option value="jurisdiction">Court Jurisdiction</option>
                <option value="miscellanous">Miscellanous</option>
            </select>
        );
    }
}

class PanelFooter extends React.Component {
    render() {
        return (
            <div className="ui vertical footer segment">
                <div className="ui container grid centered">
                    EasyConsult<span> 2019 </span>. All Rights Reserved
                </div>
            </div>
        );
    }
}

ReactDOM.render(<PanelDashboard />, document.getElementById("app"));
