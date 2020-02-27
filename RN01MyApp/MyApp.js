//리액트 라이브러리 사용
import React, {Component} from 'react';
//리액트 네이티브 라이브러리 클래스들 import
import {Text, View, Button, StyleSheet, Image} from 'react-native';

//리액트 네이티브에서는 Component를 상속받은 클래스들이 화면에 보여질 수 있음
class MyApp extends Component{
    //리액트의 Component 클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드(onDraw같은 메소드)
    //이 메소드안에서 JSX(Javascript XML)언어로 뷰를 설계하고 이를 return 해주면 됨
    render(){

        //render() 메소드안에 지역변수 선언
        let name="SAM";
        let btnTitle="click me";

        // 여러줄로 xml을 작성하려면 ()가 필요함
        return (
        // <Text>Hello React Native</Text>

        //return() 안에 2개이상의 Component 리턴할 수 없음
        // <Text>ㅁㅁㅁㅁ</Text>
        
        //2개 이상을 리턴하려면 ViewGroup의 역활을 수행하는 Compont가 있어야 함(웹에서의 <div>같은 역활)
        //안드로이드와 다르게 Layout을 사용하지 않고 그냥 View컴포넌트 사용
        // <View>
        //     <Text>Hello React Naitve.</Text>
        //     <Text>Nice to meet you.</Text>
        //     <Button title="button"></Button>
        // </View>

        // 텍스트에 보여줄 글씨를 변수의 값으로 보여주기
        // JSX언어의 특징은 <>태그문 중간에 Javascript의 변수 사용이 가능하다는 것임
        // <View>
        //     <Text>Hello {name}</Text>
        //     <Text>Nice to meet you.</Text>
        //     <Button title={btnTitle}></Button>
        // </View>

        //그냥만들면 안이쁨. 스타일 적용하기!!
        // style속성을 통해 꾸미기 - 속성 값 적용방법이 css와 다소 다름
        // style속성의 값은 객체로 제공되어야 함
        // <View style={{backgroundColor:"#F88d74",flex:1,padding:20}}> 
        //     <Text>Hello {name}</Text>
        //     <Text>Nice to meet you.</Text>
        //     <Button title={btnTitle}></Button>
        // </View>

        // <View style={rootContanierStyle}> 
        //     <Text style={textStyle}>Hello {name}</Text>
        //     <Text style={planTextStyle}>Nice to meet you.</Text>

        //     {/* Button컴포넌트 style 속성이 존재하지 않음. */}
        //     {/* <Button title={btnTitle} style={btnStyle}></Button> */}

        //     {/* 버튼의 색상은 color속성으로 */}
        //     <Button title={btnTitle} color='#846135'></Button>

        //     {/* 굳이 margin같은 스타일을 적용하려면.. 버튼을 감싸는 View를 이용함 */}
        //     <View style={{marginTop:10,width:150}}>
        //         <Button title={btnTitle} color='orange'></Button>
        //     </View>
        // </View>

        //스타일 여러개를 하나의 객체에 모두 설정하여 사용하기
        // StyleSheet클래스 이용
        // <View style={styles.root}>
        //     <Text style={styles.mainText}>Hello RN</Text>
        //     <Text style={styles.plainText}>Nice to meet you</Text>
            
        //     <Button title={btnTitle} color="orange"></Button>
        // </View>

        // 이미지 컴포넌트 사용하기 [Image컴포넌트도 사용하려면 import]
        <View style={styles.root}>
            <Text style={styles.mainText}>Hello RN</Text>
            <Text style={styles.plainText}>Nice to meet you</Text>
            
            <Button title={btnTitle} color="orange"></Button>
            {/* 이미지 */}
            {/* 이미지의 경로명 작성시에 문자열 결합 + 를 이용하면 안됌 */}
            <Image source={require('./images/bg.png')} style={styles.img}></Image>
        </View>


        ); 

        
        
    }//render..

}//class...


//스타일 변수들을 하나의 객체에 모아서 만들기
const styles=StyleSheet.create({
    root : {
        backgroundColor:'#F88d74',
        flex:1, 
        padding:16,
    },
    mainText:{
        color:"blue",
        fontSize:20,
        fontWeight:'bold',
        margin:16,
    },
    plainText:{
        margin:8,
        color:'#333333',
    },
    img:{
        margin:4,
        flex:1,
        width:null,
        resizeMode:'contain',
    }
    
});

//MyApp클래스 밖에 변수를 선언하면 전역변수[물론, 이 MyApp.js안에서만]
const rootContanierStyle={
    backgroundColor:"#F88d74",
    flex:1,
    //단위는 기본 dp
    padding:16,

    //컴포넌트들을 가로 축 가운데 정렬 하고싶다면
    //현재 flex-direction에 해당하는 세로방향의 반대축 정렬인 align-items속성 사용
    // alignItems:'center',
};

//글씨스타일 객체
const textStyle={
    color:'#FF0000',
    fontSize:20,
    fontWeight:'bold',
    margin:16,
}

//일반글씨 스타일
const planTextStyle={
    margin:8,
    color:'#888888',
}

//버튼 스타일
const btnStyle={
    margin:50,
    backgroundColor:'#00FF00',
}

//MyApp 클래스를 다른문서에서 사용하려면 export 해줘야 함
//[index.js에서 처음 실행되는 Component로 등록하고자 함]
export default MyApp;