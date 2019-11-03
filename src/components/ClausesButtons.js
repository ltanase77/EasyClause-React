import React, { Component } from 'react';

class ClausesButtons extends Component {
    constructor(props) {
        super(props);
    }
    insertClause(event) {
        const clauseLabel = event.target.getAttribute('data-clause');
        fetch('https://easy-clause.firebaseio.com/clauses-content.json')
            .then(function (response) {
                return response.json();
            })
            .then((clauses) => {
                clauses[clauseLabel].forEach((item) => {
                    console.log(item);
                })
            })
            .catch(function (error) {
                console.log("There is an error:", error.message);
            });
    }
    render() {
        return (
            <div>
                {this.props.clauses.map((item, index) => {
                    return (<div className="ui three column stackable grid buttons tiny" data-clause-type={item.typeValue} key={index}>
                        {item.clauses.map((elem, index) => {
                            return <button className="ui secondary basic button column" data-clause={elem.name} key={index} onClick={this.insertClause}>{elem.value}</button>
                        })}
                    </div>)
                })}
            </div>
        )
    }
}

export default ClausesButtons;