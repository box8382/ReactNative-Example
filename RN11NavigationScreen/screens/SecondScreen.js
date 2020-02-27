import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class SecondScreen extends Component{

    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>SecondScreen</Text>
                <Button color='orange' onPress={()=>{this.props.navigation.navigate('Home');}} title='Go back'></Button>
            </View>
        );
    }

}