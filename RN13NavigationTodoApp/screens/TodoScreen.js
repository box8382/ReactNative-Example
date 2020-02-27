import React,{Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class TodoScreen extends Component{
    render(){
        return(
            <View style={styles.root}>  ``
                <Text style={styles.title}>TODO LIST</Text>

                {/* 우선 Main.js의 todo데이터를 받았는지 확인 */}
                <Text>Todo list number :{this.props.screenProps.todo.length}</Text>

                {/* 받은 todo배열을 화면에 리스트로 보여주기 */}
                {
                    this.props.screenProps.todo.map((item,index)=>{
                        return(
                            <TouchableOpacity key={index} style={{margin:8}} onPress={()=>this.props.screenProps.addDone(index)}>
                                <Text style={{color:'indigo'}}>{item}</Text>    
                            </TouchableOpacity>
                        );
                    })
                }

                {/* 페이지 이동 버튼 : 글씨로..*/}
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Done')}} style={{marginTop:24}}>
                    <Text style={{color:'blue'}}>Go to Done List</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontWeight:'bold',
        margin:16,
    }
});