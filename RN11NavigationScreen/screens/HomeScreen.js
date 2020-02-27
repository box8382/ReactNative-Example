import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

class LogoTitle extends Component{
    render(){
        return (
            <View style={{flexDirection:'row', padding:8, alignItems:'center'}}>
                <Image style={{width:30, height:30}} source={require('../images/bg.png')}></Image>
                <Text style={{color:'white',fontWeight:'bold', fontSize:24, marginLeft:16}}>Home</Text>
            </View>
        );
    }
}


export default class HomeScreen extends Component{

    //툴바 모양 설정하기
    //특별한 static 변수를 지정하면 됨 - 이 옵션적용은 다시 run 해야만 적용됨
    // static navigationOptions={
    //     title:'홈 화면',
    //     headerStyle:{
    //         backgroundColor:'#f4d32a', //헤더바 배경색
    //     },
    //     headerTintColor:'#FFF', //헤더글씨 색상 3자리로만 해도 됌
    //     headerTitleStyle:{
    //         fontWeight:'bold',
    //     },
    // }

    //이미지를 가진 헤더 만들기
    // static navigationOptions={
    //     headerTitle: ()=><LogoTitle></LogoTitle>,
    //     headerStyle:{backgroundColor:'green'},
    //     title:"aaaa", //이건 무시됨
    // }

    //툴바를 없애고 싶다면
    static navigationOptions={
        header:null,
    }

    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>HomeScreen</Text>
                <Button onPress={this.gotoSecond} title="Go to the second screen"></Button>
            </View>
        );
    }

    gotoSecond=()=>{
        //네비게이터에 의해 보여지는 컴포넌트들은 자동으로 
        //this.props 변수안에 navigation이라는 객체가 전달됨
        this.props.navigation.navigate('Second');
    }

}