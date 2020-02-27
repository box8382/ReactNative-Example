import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MyComponent2 from './MyComponent2';
import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4';

export default class MainComponent extends Component{

    state={
        msg:"Hello world",      
    }

    render(){
        return(
            <View style={styles.root}>
                <Text>{this.state.msg}</Text>

                {/* 나만의 Component를 만들어 보여주기 */}
                {/* property(속성)를 이용해서 값을 전달할 수 있음 */}
                <MyComponent name='sam' title='clickA'></MyComponent>
                <MyComponent name='robin' title='clickB'></MyComponent>

                {/* 별도 .js에 컴포넌트 사용 */}
                {/* 버튼 콜백함수를 전달할 수 있음 */}
                <MyComponent2 onPress={this.changeMessage} name='안녕' title='하세요' color='orange'></MyComponent2>

                <MyComponent3 onPress={this.changeMessage} title='버튼' color='black'></MyComponent3>
                <MyComponent3 onPress={this.changeMessage} title='버튼'></MyComponent3>

                {/* title은 버튼의 필수여서 전달을 하지않으면 에러가뜸 */}
                <MyComponent3 onPress={this.changeMessage}></MyComponent3>
                <MyComponent3 title='버튼' color='black'></MyComponent3>
                <MyComponent3></MyComponent3>

                {/*  */}
                <MyComponent4 title="press me" color="green" onPress={this.changeMessage}></MyComponent4>

            </View>
        );
    }

    // state msg 를 변경하는 메소드
    changeMessage=()=>{
        this.setState({msg:'Nice'});
    }
}

// 나만의 컴포넌트 클래스 
class MyComponent extends Component{

    //이 컴포넌트를 사용하면서 전달한 속성들은 모두 특별한 멤버변수에 저장됨
    //그 특별한 멤버변수 this.props

    render(){
        return(
            <View style={{marginTop:16, backgroundColor:'green'}}>
                <Text style={{margin:5}}>Hello {this.props.name}</Text>
                <Button title={this.props.title}></Button>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:16,
        backgroundColor:'gray',
    },  
});