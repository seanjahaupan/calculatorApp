import React, { Component } from 'react';
import { View } from 'react-native';
import Display from './display';
import ButtonContainer from './buttonContainer';

class App extends Component {

    constructor(props) {
        super(props);
        this.state=props.initialState;
        pressedButton = this.pressedButton.bind(this);
    }

    pressedButton = (selectedButton) => {
        console.log(this.state);
        if (['+','-','*','/','^'].includes(selectedButton)){            
            this.operatorButton(selectedButton);
        }
        else if (selectedButton === '='){
            //call equalbutton function
            this.equalButton();
        }
        else if (selectedButton === 'C'){
            this.clearButton();
        }
        else if (this.state.newInput === '0'){
            //ignore leading zeros
            this.setState({displayedValue: selectedButton, newInput: selectedButton});
        }
        else {
            //for digits add it to the old digit in newInput
            newInput = this.state.newInput + selectedButton;
            this.setState({newInput, displayedValue: newInput});
        }
        
    }

    operatorButton = (operator) => {
        //this is called if an operator button was pressed

        if (this.state.newInput === ''){
            //if no input, keep changing the state's operator
            this.setState({operator});
        }
        else if (this.state.subTotal === '') {
            this.setState({ subTotal: this.state.newInput,  // set the subTotal to what's shown on screen
                        operator, //set the loaded operator to what was selected
                        newInput:'' // clear out the screen after pressing an operator button
            });
        }
        else if (this.state.operator !== null && this.state.newInput !== "" ){
            //everything is set up, perform calculation
            let subTotal = eval(this.state.subTotal+this.state.operator+this.state.newInput);
            this.setState({ subTotal, 
                            displayedValue: subTotal,
                            newInput:'',
                            operator
                            
                    });
        }
        else {
                //no operator selected yet or there's no current input
                this.setState({ 
                            operator, //set the loaded operator to what was selected
                            //don't need to update screen
                            newInput:'' // clear out the screen after pressing an operator button

                });
            }
    }

    equalButton = () => {
        //this is called if the button pressed was the equal button
        //Will perform different logic depending on the current situation

             if (this.state.newInput ===''){
                //do stuff if nothing is inside
                if (this.state.operator !== null && this.state.previousInput !== ''){
                    //if the operator is there and we have a previous value...
                    console.log('i got here')
                    let subTotal = eval(this.state.subTotal+this.state.operator+this.state.previousInput);
                    this.setState({ subTotal, 
                                    displayedValue: subTotal,
                                    });
                }
             }
            else if (this.state.operator !== null && this.state.subTotal !== '' && this.state.newInput !== ''){
                
                let subTotal = eval(this.state.subTotal+this.state.operator+this.state.newInput);
                this.setState({ subTotal, 
                                displayedValue: subTotal,
                                newInput:'',
                                previousInput: this.state.newInput});
            }
    }

    clearButton = () => {
        this.setState({...this.props.initialState});
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Display displayedValue={this.state.displayedValue} />
                <ButtonContainer onPress={this.pressedButton} />
            </View>
        );
    }
}

App.defaultProps = {
    initialState: {
        displayedValue: '0',
        subTotal: '',
        newInput: '',
        previousInput: '',
        operator: null
    }
};

export default App;