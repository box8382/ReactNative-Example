import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback, ScrollView, ImageBackground} from 'react-native';

export default class MainComponent extends Component{

    constructor(){
        super()
        this.state={

            //이 컴포넌트의 특별한 멤버변수 state
            imgSrc:require('./images/img02.png'),

            //이미지를 순차적으로 변경하기 위해
            imgNum: 0, //배열의 인덱스 번호
            imgArr:[
                require('./images/img01.jpg'),
                require('./images/img02.png'),
                require('./images/img03.jpg'),
                require('./images/img04.jpg'),
                require('./images/img05.jpg'),
            ],
        }
    }

    render(){
        return(
            // <View style={styles.mainView}>
            //     {/* 이미지가 많을 때 스크롤 필요 */}
            //     <ScrollView style={{height:300}}>
            //         <Image 
            //             style={{width:150,height:150}} 
            //             source={ {uri:'https://i.stack.imgur.com/Of2w5.jpg'} }>        
            //         </Image>
            //         <Image 
            //             style={{width:150,height:150}} 
            //             source={ {uri:'https://i.stack.imgur.com/Of2w5.jpg'} }>        
            //         </Image>
            //         <Image 
            //             style={{width:150,height:150}} 
            //             source={ {uri:'https://i.stack.imgur.com/Of2w5.jpg'} }>        
            //         </Image>
            //         <Image 
            //             style={{width:150,height:150}} 
            //             source={ {uri:'https://i.stack.imgur.com/Of2w5.jpg'} }>        
            //         </Image>
            //     </ScrollView>

            //     {/* <Image 
            //         style={styles.mainImage} 
            //         source={require('./images/img01.jpg')}>
            //     </Image> */}

            //     {/* 네트워크의 이미지 보여주기 : 사이즈 지정이 없으면 보이지 않음*/}
            //     <Image 
            //         style={{width:150,height:150}} 
            //         source={ {uri:'https://i.stack.imgur.com/Of2w5.jpg'} }>        
            //     </Image>

            //     {/* 이미지 클릭 반응하기 : Button이 아니면 onPress속성은 사용할 수 없음 */}
            //     {/* 터치를 인지하도록 만들어진 컴포넌트들 TouchableXXXX 를 사용 */}
            //     <TouchableHighlight onPress={this.clickImage}>
            //         <Image 
            //             style={styles.mainImage} 
            //             source={require('./images/img02.png')}>
            //         </Image>
            //     </TouchableHighlight>
            //     {/* Button이 아닌 컴포넌트들을 클릭하고 싶을 때 모두 사용가능 */}

            //     <TouchableNativeFeedback onPress={this.clickImage}
            //      background={TouchableNativeFeedback.SelectableBackground()}>
            //         <Image 
            //             style={styles.mainImage} 
            //             source={this.state.imgArr[this.state.imgNum]}>
            //         </Image>
            //     </TouchableNativeFeedback>
            // </View>

            <View>
                <ImageBackground 
                    source={require('./images/img01.jpg')} 
                    style={{width:'100%',height:'100%'}}>
                    <Text style={{color:'red',fontSize:32,fontWeight:'bold', margin:16}}>Image</Text>
                    <Text style={{color:'green',fontSize:24, margin:8}}>This is image</Text>

                </ImageBackground>
            </View>
        );
    }//render method...

    clickImage=()=>{
        // alert('clicked image');
        let num=this.state.imgNum;
        num++;
        if(num>4) num=0;

        this.setState({imgNum:num});
    }

}//main Component class..

const styles=StyleSheet.create({
    mainView:{
        flex:1,
        padding:16,
    },
    mainImage:{
        width:150,
        height:150,
        resizeMode:'cover',
    },
});