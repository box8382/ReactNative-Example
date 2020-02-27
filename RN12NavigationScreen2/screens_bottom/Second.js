import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Second extends Component{

    static navigationOptions={
        tabBarIcon: ()=>{return <Icon name="heart" size={24} color="red"></Icon>}

    }

    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Second TAB</Text>
            </View>
        );
    }
}