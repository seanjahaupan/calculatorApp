import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const NumberButton = (props) => {

    return(

        <TouchableOpacity style={styles.touchableOpacityStyle} onPress={() => props.onPress(props.number)}>
            <Text style={styles.numberButtonText}>
                {props.number}
            </Text>
        </TouchableOpacity>
  
    );
}

const styles = {
    
    touchableOpacityStyle: {
        
        height:'25%',
        width: '25%',
        backgroundColor: 'aliceblue',
        borderColor:'black',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    numberButtonText: {
        //flex:1,
       //justifyContent:'center',
        
    }
}
export default NumberButton;