import React from 'react';
import PanelContent from './PanelContent';

class Dashboard extends React.Component {
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
        clausesEN: [],
        clausesRO: []
    };
    componentDidMount() {
        this._isMounted = true;
        fetch('https://easy-clause.firebaseio.com/clauses-type.json')
            .then(res => res.json())
            .then(result => {
                if (this._isMounted) {
                    this.setState({ clausesEN: result.EN, clausesRO: result.RO })
                }
            });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <div>
                <PanelContent data={this.state.data} clausesRO={this.state.clausesRO} clausesEN={this.state.clausesEN} />
            </div>
        );
    }
}

export default Dashboard;