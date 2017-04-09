import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Display from './display';

class App extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <Text>
                    This is a calculator
                </Text>
                <Display />

            </View>
        );
    }
}

export default App;