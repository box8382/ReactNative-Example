import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class First extends Component{

    static navigationOptions={
        tabBarIcon:()=><Icon name='heart' size={20} color='red'></Icon>
    }

    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>First TAB</Text>
            </View>
        );
    }
}