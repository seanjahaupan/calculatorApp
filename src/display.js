import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

const Display = (props) => {
    
 
    const {displayTextStyle,  displayTextViewStyle} = styles;

    return(
        
        <View style={displayTextViewStyle}>
            <Text style={displayTextStyle}>
                {props.displayedValue}
            </Text>
        </View>

        
    )
}


const styles = {
    displayTextStyle: {
        fontSize: 50
    },
    displayTextViewStyle:{
        alignItems:'flex-end',
        marginTop: 40
    }

}

export default Display;