import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import pick from '../api/picker';
import upLoadfile from '../api/upLoad';
//import ima from './images-master/appIcon/maxi.jpg';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            data: null,
        }
    }

    Show() {
        pick((source, data) => this.setState({
            avatarSource: source,
            data: data,
        }));
    }

    upLoad() {
        upLoadfile([
           { name: 'info', data: 'khoa pham '},
           { name : 'avatar', filename : 'avatar.png', data: this.state.data },
        ])
         .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    render() {
        const img = this.state.avatarSource == null ? null :
            <Image
                source={this.state.avatarSource}
                style={{ height: 200, width: 200 }}
            />
        return (
            <View style={{ flex: 1, backgroundColor: '#CCCCFF' }}>
                <Text>Component app</Text>
                <TouchableOpacity onPress={() => this.Show()} >
                    <Text> show image picket </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.upLoad()} >
                    <Text> upload  </Text>
                </TouchableOpacity>
                {img}
            </View>
        );
    }
}


