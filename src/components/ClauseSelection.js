import React from 'react'
class ClausesSelection extends React.Component {
    constructor(props) {
        super(props);
    }
    displayButtons(event) {
        const value = event.target.value;
        console.log(value);
        const buttonsDiv = document.querySelectorAll('.buttons');
        buttonsDiv.forEach((elem) => {
            if (elem.getAttribute("data-clause-type") === value) {
                elem.style.display = "block";
            } else {
                elem.style.display = "none";
            }
        })
    }
    render() {
        return (
            <select className="ui fluid selection dropdown" onChange={this.displayButtons}>
                {/* <i className="dropdown icon"></i> */}
                <option>Select Clause</option>
                {this.props.clauses.map((item, index) => {
                    return <option value={item.typeValue} key={index}>{item.type}</option>
                })}
            </select>
        );

    }
}

export default ClausesSelection;