import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';

export default class Community extends Component{
    render(){
        return (
            <View style={style.root}>
                <Text>Community</Text>
            </View>
        );
    }

    static navigationOptions=(props)=>{
        return{
            headerTitle:'커뮤니티',
            headerRight: ()=>{
                return <TouchableOpacity 
                            style={{marginRight:16}}
                            onPress={ ()=>{props.navigation.toggleDrawer()} }>
                            <Image source={require('../images/ic_menu.png')}></Image>
                        </TouchableOpacity>},
        }
    }
}


const style= StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
});