import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import First from './screens_toptab/First';
import Second from './screens_toptab/Second';
import Third from './screens_toptab/Third';
import Icon from 'react-native-vector-icons/FontAwesome';

//스와이프 관련 라이브러리 import
import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';


const toptabNavi=createMaterialTopTabNavigator(
    {
        First:{screen: First},
        Sceond:{screen: Second, navigationOptions:{tabBarIcon:()=><Icon name='search' size={20} color='blue'></Icon>}},
        Third:{screen: Third, navigationOptions:{tabBarIcon:()=><Icon name='heart' size={20} color='green'></Icon>}},
    },
    {
        tabBarPosition:'bottom',
        tabBarOptions:{
            showIcon:true,
            activeTintColor:'#FFFF00',  //선택된 탭 글씨 색상
            inactiveTintColor:'#FFFFFF', //선택 안된 탭 글씨색상
            style:{ 
                backgroundColor:'#496481',
            },
            indicatorStyle:{
                borderBottomColor:'#FFFFFF',
                borderBottomWidth: 4,
            },
            swipeEnabled:true,
            pagerComponent: ViewPagerAdapter,
        }
    }
);

const AppContainer=createAppContainer(toptabNavi);

export default class TopTabMain extends Component{
    render(){
        return <AppContainer></AppContainer>;
    }
}

