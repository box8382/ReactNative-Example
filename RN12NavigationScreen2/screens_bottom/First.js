import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';


export default class First extends Component{

    // 탭아이콘 지정
    static navigationOptions={
        tabBarIcon:()=>{return <Image source={require('../icons/button_red_alt.png')} style={{width:24, height:24}}></Image>}
    }

    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>FIRST TAB</Text>
            </View>
        );
    }
}