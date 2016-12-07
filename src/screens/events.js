import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Events extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    renderViews(rowData) {
        return (
            <View style={{marginRight: 10, backgroundColor: 'pink'}}>
                <Text>{rowData}</Text>
            </View>
        );
    }

    render() {
        return (
            <ListView
                horizontal
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderViews(rowData)
                }
            />
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'pink',
    },
    slide: {
        height: 200,
        width: 100,
    }
};
