import React from 'react'
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

export default ClausesSelection;