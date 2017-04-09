import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Display extends Component{
    
    constructor(props) {
        super(props);
        this.state={displayedValue: 0, result: 0, argument1: 0, argument2: 0, operator: null};
        this.onPress1 = this.onPress1.bind(this);
        this.onPress2 = this.onPress2.bind(this);
        this.onPressPlus = this.onPressPlus.bind(this);
        this.onPressEqual = this.onPressEqual.bind(this);
    }

    onPress1(){
        this.setState({argument1: 1, displayedValue: 1});
        console.log(this.state);
    }
    onPress2(){
        this.setState({argument2: 2, displayedValue: 2});
    }
    onPressPlus(){
        this.setState({operator: '+', displayedValue: '+'});
    }
    onPressEqual(){
        // do logic to change this,state.result
        //change result and then pass that variable to this.setState.result
        let result = 0;
        switch(this.state.operator){

            case '+':
                result = this.state.argument1 + this.state.argument2;
                break;
            default:
                result = this.state.displayedValue
                
        }
        this.setState({ displayedValue: result, result});
    }
    render(){
        const {displayTextStyle, displayViewStyle} = styles;

        return(
            <View style={displayViewStyle}>
                <Text style={displayTextStyle}>
                    {this.state.displayedValue}
                </Text>
                <Button 
                    onPress={this.onPress1}
                    title = '1'
                />
                <Button 
                    onPress={this.onPress2}
                    title = '2'
                />
                <Button 
                    onPress={this.onPressPlus}
                    title = '+'
                />
                <Button 
                    onPress={this.onPressEqual}
                    title = '='
                />
                
            </View>
        )
    }
}

const styles = {
    displayTextStyle: {
        fontSize: 30,
    },
    displayViewStyle: {
        flex:1
    }
}

export default Display;