import React, { Component } from 'react';
import BtnLang from './BtnLang';
import ClausesSelection from './ClauseSelection';

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
            this.setState({ isEn: false });
        } else {
            this.setState({ isEn: true });
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

/* PanelContent.propTypes = {
    title: PropTypes.string
} */

export default PanelContent;