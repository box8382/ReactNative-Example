import React, {Component} from 'react';
import {View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import First from './screens_bottom/First';
import Second from './screens_bottom/Second';
import Third from './screens_bottom/Third';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

// BottomTabNavigator 생성
const bottomNav= createBottomTabNavigator(
    {
        First: {screen: First},
        Second: {screen: Second},
        Third: 
        {screen: Third,
            navigationOptions:{
                tabBarIcon:()=><Icon name="star" size={24} color="orange"></Icon>
            }
        },
    },
    //TabNavigatorConfig
    {
        initialRouteName: 'Second',
        tabBarOptions:{
            showLabel: true,
            showIcon: true,
            labelStyle:{
                fontSize: 12,
            },
            style:{
                backgroundColor:'white',
            },
            activeTintColor:'red',
            activeBackgroundColor:'#aaaaaa',
            tabStyle:{
                borderTopWidth:1,
                borderBottomWidth:1,
                borderLeftWidth:0.5,
                borderRightWidth:0.5,
                borderColor:'black',
                paddingTop:8, //탭 사이즈 커지진 않고 안에 내용물이 조금 내려가는정도
            }

        }
    }
);

//Navigator를 감싸는 AppContainer 생성
const AppContainer= createAppContainer(bottomNav);

export default class Main extends Component{
    render(){
        return <AppContainer></AppContainer>
    }
}
