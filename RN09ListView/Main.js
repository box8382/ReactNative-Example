import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';

export default class Main extends Component{

    //RN에서 ListView용도의 컴포넌트
    //1. FlatList
    //2. SectioinList

    constructor(){
        super();

        this.state= {
            // 리스트에 보여줄 대량의 데이터
            datas: ["aaa", "bbb", "ccc", "ddd"],

            // key 프로퍼티를 가진 대량의 데이터
            datas2: [
                {key:"0", data:"aaa"},
                {key:"1", data:"bbb"},
                {key:"2", data:"ccc"},
                {key:"3", data:"ddd"},
                {key:"4", data:"aaa"},
                {key:"5", data:"bbb"},
                {key:"6", data:"ccc"},
                {key:"7", data:"ddd"},
                {key:"8", data:"aaa"},
                {key:"9", data:"bbb"},
                {key:"10", data:"ccc"},
                {key:"11", data:"ddd"},
            ],

            // 08ListLayout2예제 다시 만들어보기
            datas3 : [
                {name:"sam", message:"Hello world", img:require('./images/moana01.jpg')},
                {name:"robin", message:"Hello RN", img:require('./images/moana02.jpg')},
                {name:"hong", message:"Hello react", img:require('./images/moana03.jpg')},
                {name:"kim", message:"Hello hybrid", img:require('./images/moana04.jpg')},
                {name:"rosa", message:"Hello ios", img:require('./images/moana05.jpg')},
                {name:"moana", message:"Hello movie", img:require('./images/moana01.jpg')},
                {name:"jack", message:"Hello tom", img:require('./images/moana02.jpg')},
                {name:"merry", message:"Hello web", img:require('./images/moana03.jpg')},
                
            ]

        };
    }

    render(){

        //대량의 데이터의 각 아이템에 [key]라는 이름의 프로퍼티가 존재해야만 함.
        //기존의 배열요소객체들의 key라는 이름의 프로퍼티(멤버변수)를 추가하기
        //배열의 요소개수만큼 요수들을 순회하면서 파라미터로 전달된 콜백함수 호출하는 forEach()
        // this.state.datas3.forEach( (element, index)=>{
        //     element.key= index;//배열요소에 새로운 멤버 key 추가하기!!           
        // });

        return (
            <View style={ style.root }>
                <Text style={ style.titleText }>FlatList TEST</Text>

                {/* 1. FlatList */}
                {/* 2가지 필수속성 */}
                {/* 1) data - FlatList가 보여줄 대량의 데이터 */}
                {/* 2) renderItem - 아이템 하나의 모양(컴포넌트)를 만들어서 리턴하는 콜백함수 지정 */}
                {/* <FlatList 
                    data={ this.state.datas2 }
                    // renderItem의 함수 파라미터에 전달된 객체는 위 
                    // this.state.datas배열의 하나하나 요소의 값과 인덱스번호를
                    // 멤버로 가지고 있는 객체가 전달됨
                    // 그 객체의 멤버인 item, index를 구조분해 할당으로 
                    // 파라미터로 받기
                    renderItem={ ( {item} )=>{ return <Text>{item.data} , {item.key}</Text>} }>
                </FlatList> */}

                {/* <FlatList
                    data={ this.state.datas2 }
                    renderItem={obj=><TouchableOpacity onPress={ ()=>{ alert(obj.item.data); } }>
                                                <View style={ {borderWidth:1, borderRadius:8, padding:8, margin:8,} }>
                                                    <Text>{ obj.item.key }</Text>
                                                    <Text>{ obj.item.data }</Text>
                                                </View>
                                    </TouchableOpacity>
                                } >                    
                </FlatList> */}

                {/* 예제 08ListLayout2 다시 만들기 */}
                <FlatList
                    data={ this.state.datas3 }
                    renderItem={ this.renderItem }
                    // FlatList의 속성 : 각요소에 키를 추출해주는 콜백함수 지정
                    keyExtractor={item=>item.name} >                    
                </FlatList>

            </View>
        );
    }// render method

    //멤버메소드 - FlatList의 renderItem용
    renderItem= ( {item} )=>{
        return  <TouchableOpacity style={ style.itemView } onPress={ ()=>{ alert(item.name); } }>
                    <Image source={ item.img } style={ style.itemImg }></Image>
                    <View style={ {flexDirection:'column'} }>
                        <Text style={ style.itemName }>{ item.name }</Text>
                        <Text style={ style.itemMsg }>{ item.message }</Text>
                    </View>
                </TouchableOpacity>
    }
    
}

const style= StyleSheet.create({
    root:{flex:1, padding:16,},
    titleText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        paddingBottom:16,
    },
    itemView:{
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
        fontSize:16,
        fontStyle:'italic',
    }
});