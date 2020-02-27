import React,{Component} from 'react';
import {View,Text,StyleSheet, Button, ScrollView, Image, TouchableOpacity} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();

        //대량의 데이터
        this.state={
            datas:[
                {name:"sam",msg:"Hello world",img:require('./images/img01.jpg')},
                {name:"robin",msg:"Hello robin",img:require('./images/img02.png')},
                {name:"sangdi",msg:"Hello sangdi",img:require('./images/img03.jpg')},
                {name:"minkuk",msg:"Hello minkuk",img:require('./images/img04.jpg')},
                {name:"dove",msg:"Hello dove",img:require('./images/img05.jpg')},
                {name:"kim",msg:"Hello kim",img:require('./images/img06.jpg')},
                {name:"lee",msg:"Hello lee",img:require('./images/img07.jpg')},
                {name:"rosa",msg:"Hello rosa",img:require('./images/img08.jpg')}
            ],
        }
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                {/* 대량의 데이터 배열의 요소개수만큼 Component를 리턴하는 map()메소드 사용 */}
                {
                    this.state.datas.map( (element,index)=>{
                        return (
                            <TouchableOpacity onPress={()=>{this.clickItem(index);}}>
                            <View key={index} style={styles.item}>
                                <Image source={element.img} style={styles.itemImg}></Image>

                                <View style={{flexDirection:'column'}}>
                                    <Text style={styles.itemName}>{element.name}</Text>
                                    <Text style={styles.itemMsg}>{element.msg}</Text>
                                </View>
                                
                            </View>   
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
        );
    }

    // 메소드를 호출하면서 파라미터로 클릭된 아이템의 인덱스 번호 받아야 함

    clickItem=(index)=>{
        //클릭한 아이템의 name값?
        alert(this.state.datas[index].name);
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
    },
    itemMsg:{
        fontSize:12,
        fontStyle:'italic',
    }
});
