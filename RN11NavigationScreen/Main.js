import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';

import {createAppContainer} from 'react-navigation';

//StackNavigator객체 생성
const stackNav=createStackNavigator({
    Home:{screen:HomeScreen, navigationOptions:{headerShown:false}},
    Second:{screen:SecondScreen, navigationOptions:{headerShown:false}},
});

// 네비게이터객체를 가지고 있는 AppContainer 객체 생성 : 컴포넌트 객체
const Container=createAppContainer(stackNav);

export default class Main extends Component{

    render(){
        return <Container theme="light"></Container>;
    }

}