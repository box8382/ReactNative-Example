import React, {Component} from 'react';
import {View} from 'react-native';

export default class MainComponent extends Component{
    render(){
        return (
            //여러개의 뷰를 배치하려면 가장 큰 뷰가 필요함. return은 1개만 가능함
            // 기본 flex스타일 이며 기본적으로 flex-direction은 column(세로) 방향
            // 크기값 숫자의 기본단위 : dp, [숫자, %] 또는 flex를 통해서 지정가능
            // <View>
            //     <View style={ {width:50, height:50, backgroundColor:'red'} }></View>
            //     <View style={ {width:100, height:100, backgroundColor:'green'} }></View>
            //     <View style={ {width:'70%', height:150, backgroundColor:'blue'} }></View>
            // </View>

            //전체사이즈 350정도 높이값, 뷰 3개 크기배분을 1:2:4로 배치하기

            // <View style={ {flex:1, flexDirection:"row", justifyContent:'space-evenly', alignItems:'center'} }>
            //     {/* 자식뷰들의 너비와 높이지정 */}
            //     <View style={ {width:50, height:50,backgroundColor:'red'} }></View>
            //     <View style={ {width:100, height:100,backgroundColor:'green'} }></View>
            //     <View style={ {width:150, height:150,backgroundColor:'blue'} }></View>
            // </View>

            // <View style={{flex:1, flexDirection:'column'}}>
            //     <View style={{height:50, backgroundColor:'red'}}></View>

            //     {/* 남은 공간을 1:2로 배치 */}
            //     <View style={{flex:1, backgroundColor:'green'}}></View>
            //     <View style={{flex:2, backgroundColor:'blue'}}></View>
            // </View>


            <View style={{flex:1, flexDirection:'column'}}>
                
                {/* 크게 세로 2분할 1:2 */}
                <View style={{flex:1, flexDirection:'row'}}>
                    
                    {/* 좌우 분할 1:2 */}
                    <View style={{flex:1, backgroundColor:'red'}}></View>

                    <View style={{flex:2, flexDirection:'column'}}>
                        <View style={{flex:1,backgroundColor:'yellow'}}></View>
                        <View style={{flex:2,backgroundColor:'black'}}></View>
                    </View>

                    {/* 절대위치로 뷰 겹치기 */}
                    <View style={{width:50,height:50,backgroundColor:'white',position:'absolute',left:10,top:10}}></View>
                    <View style={{width:50,height:50,backgroundColor:'gray',position:'absolute',left:20,top:20}}></View>

                </View>
                <View style={{flex:2, flexDirection:'row'}}>
                    {/* 좌우분할 2:1 */}
                    <View style={{flex:2, backgroundColor:'blue'}}>
                        <View style={{flex:1,backgroundColor:'gray'}}></View>
                        <View style={{flex:1,backgroundColor:'black'}}>
                            <View style={{width:50,height:50,backgroundColor:'white',position:'absolute',left:10,top:10}}></View>
                            <View style={{width:50,height:50,backgroundColor:'gray',position:'absolute',left:20,top:20}}></View>
                        </View>
                    </View>

                    <View style={{flex:1, backgroundColor:'green'}}></View>
                </View>

                <View style={{bottom:100, right:90, backgroundColor:'orange', position:'absolute', borderRadius:50, width:100, height:100}}></View>
            </View>
        );
    }
}