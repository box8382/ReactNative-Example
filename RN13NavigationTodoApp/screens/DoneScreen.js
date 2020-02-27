import React,{Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class DoneScreen extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.title}>TODO LIST</Text>

                {/* Main.js로 부터 받은 done 배열 출력 */}
                <Text>Done List number : {this.props.screenProps.done.length}</Text>

                {
                    this.props.screenProps.done.map((item,index)=>{
                        return (
                            <TouchableOpacity key={index} style={{margin:8}} onPress={()=>{this.props.screenProps.addTodo(index)}}>
                                <Text style={{color:'orange'}}>{item}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
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