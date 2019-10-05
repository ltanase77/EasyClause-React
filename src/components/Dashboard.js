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
    };

    render() {
        return (
            <div>
                <PanelContent data={this.state.data} />
            </div>
        );
    }
}

export default Dashboard;