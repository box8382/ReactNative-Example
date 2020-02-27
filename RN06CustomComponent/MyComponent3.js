import React, {Component} from 'react';
import {Button, View} from 'react-native';

export default class MyComponent3 extends Component{

    //만약 props가 전달되지 않았을 때를 대비하기 defaultProps < 고정된 이름임
    static defaultProps={
        title:"untitled",
        color:"orange",
        onPress:()=>{alert('설정안했음')},
    }

    render(){
        return(
            <View style={{margin:16}}>
                <Button title={this.props.title} color={this.props.color} onPress={this.props.onPress}></Button>
            </View>
        );
    }
}