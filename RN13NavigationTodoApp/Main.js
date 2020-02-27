import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import TodoScreen from './screens/TodoScreen';
import DoneScreen from './screens/DoneScreen';
import { createAppContainer } from 'react-navigation';
import { View, Alert } from 'react-native';

//StackNavigator 생성
const stackNav= createStackNavigator(
    {
        Todo: {screen:TodoScreen},
        Done: {screen:DoneScreen},
    }
);

//AppContainer
const AppContainer= createAppContainer(stackNav);

export default class Main extends Component{

    // 스크린(컴포넌트)간에는 데이터 전달 할 수 없어서
    // 스크린들을 Navigator로 가지고 있는 이 main.js에서 데이터를 만들고
    // 이를 스크린들에 전달하여 사용하도록 해야 함.
    constructor(){
        super();

        this.state={
            todo:['study Android', 'study ReactNative', 'travel', 'health'],
            done:[],
        }
    }

    render(){
        return <AppContainer
        screenProps={
            {
                todo:this.state.todo,
                done:this.state.done,
                //배열을 변경하는 addDone 함수도 전달
                addDone:this.addDone,
                addTodo:this.addTodo,
            }
        }>
            
        </AppContainer>
    }//render method...

    //TodoScreen에서 항목을 클릭했을 때 todo배열요소를 done배열로 옮기는 기능
    addDone=(index)=>{
        //전달받은 인덱스번호의 항목을 todo배열에서 제거
        // splice(제거할 index번호, 제거할 요소개수) 메소드 
        let element=this.state.todo.splice(index, 1); //todo배열에서 제거한 index번호 1개를 요소를 리턴
        
        // 빼네온 요소 element를 done 배열에 추가 
        this.state.done.push(element);

        //제거된 배열로 state.todo변경
        // this.setState({ //이거 안해도 되는데...?
        //     // todo:this.state.todo,
        //     // done:this.state.done
        // });
        this.setState({}); //이렇게만 해도됨..?

        // const{todo,done}=this.state;
        // let item=todo.splice(index, 1);
        // done.push(item);
        // //프로퍼티명과, 값을 가지고 있는 변수명이 같다면 변수
        // this.setState({todo,done});
    }

    addTodo=(index)=>{
        const{todo,done}=this.state;
        let item=done.splice(index,1);
        todo.push(item);
        this.setState({});
    }

}//main class..