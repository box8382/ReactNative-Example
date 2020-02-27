import React, {Component} from 'react';
import {View, Text, StyleSheet, SectionList, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();

        // 대량의 데이터
        this.state={
            sectionDatas: [
                // SectionList의 섹션 하나 객체에는 title, data 2개의 프로퍼티 필요
                {title:'한식', data: ["백반", "고기산적", "비빔밥"] },
                {title:'중식', data: ["짜장면", "짬뽕", "탕수육"] },
                {title:'일식', data: ["초밥", "회", "덮밥"] },
            ],
        };
    }

    render(){
        return (
            <View style={ style.root }>
                {/* 리스트에 그룹핑이 가능한 리스트뷰 */}
                {/* 3개의 필수 속성 */}
                {/* 1) sections - 섹션 title과 섹션별 data들을 가진 대량의 데이터 */}
                {/* 2) renderSectionHeader - 섹션별 title영역에 그려질 컴포넌트를 리턴하는 콜백함수 지정 */}
                {/* 3) renderItem - 섹션별 item영역에 그려질 컴포넌트를 리턴하는 콜백함수 지정 */}
                <SectionList
                    sections={ this.state.sectionDatas }
                    renderSectionHeader={ ( {section} )=>{
                        return (
                            <View style={ style.sectionHeader }>
                                <Text style={ style.sectionTitle }>{ section.title }</Text>
                            </View>
                        );
                    } }
                    renderItem={ ( {item, index, secion} )=>{
                        return (
                            <TouchableOpacity style={ style.itemView } onPress={ ()=>{ this.clickItem(item); }   }>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        );
                    }  }
                    
                    keyExtractor={ (item,index)=> index }>                    
                </SectionList>

            </View>
        );
    }//render method..

    clickItem=item=> Alert.alert( item )
}

const style= StyleSheet.create({
    root:{flex:1, padding:16},
    sectionHeader:{
        padding:4,
        backgroundColor:'#eeeeee',
    },
    sectionTitle:{
        fontSize:24,
        fontWeight:'bold',
    },
    itemView:{
        padding:8,
    }
});