import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Main extends Component{
    // 라이프사이클 메소드

    state={
        text:'nice',
    }

    //1. 생성자
    constructor(){
        super();

        //화면에 보이기(render)전에 실행되는 메소드이기에 화면에 출력못함
        console.log('constructor!!!!'); //로그 찍기
    }

    //2. 화면에 보여지기 전에 자동 호출되는 콜백메소드(안드로이드의 onCreate()와 비슷)
    // componentWillMount(){} //deprecate method..
    UNSAFE_componentWillMount(){
        console.log('will mount!!');
    }
    
    //3. 화면에 그려내는 메소드
    render(){
        console.log('render.....');
        return <View style={{padding:16}}>
            <Text>{this.state.text}</Text>
            <Button title="button" onPress={()=>{this.setState({text:'hello'})}}></Button>
            </View>
    }

    //4. 화면에 그려낸 후 딱 1번 호출되는 메소드
    componentDidMount(){
        //보통 이 메소드 안에서 DB를 읽어오거나 네트워크로 데이터 불러오기 등의 작업 수행
        console.log('component did mount......');
    }

    //5. 화면이 갱신(re-render) 될때 마다 호출되는 메소드
    componentDidUpdate(){
        console.log('component did update.......');
    }

    //6. 이 컴포넌트가 종료될 때 자동 실행
    componentWillUnmount(){
        console.log('component will unmount.......');
    }
}