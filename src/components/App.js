/* eslint react/prop-types: 0 */
import React from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import PanelFooter from './PanelFooter';
import './../css/main.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Dashboard />
                <PanelFooter />
            </div>
        )
    }
}

export default App;
