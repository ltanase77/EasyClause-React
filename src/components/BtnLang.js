import React from 'react';

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

export default BtnLang;