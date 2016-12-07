import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Details from './screens/details';
import Events from './screens/events';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="Details" component={Details} title="" navigationBarStyle={styles.navbar} inital />
                    <Scene key="Events" component={Events} title="" hideNavBar />
                </Scene>
            </Router>
        );
    }
}

const styles = {
    navbar: {
        backgroundColor: 'rgba(201, 196, 191, 0.6)',
        elevation: 2,
        borderBottomColor: 'transparent',
    },
    navtitle: {

    },
}