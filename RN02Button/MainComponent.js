import React, {Component} from 'react';
import {Text, View, Button, Alert, Image} from 'react-native';



class MainComponent extends Component{

    //멤버변수 만들기
    // let name;//ERROR 

    //멤버변수는 가급적 생성자 함수 안에서 this키워드로 생성 및 지정
    constructor(){
        //상속받은 클래스는 반드시 생성자를 만들때 명시적으로 부모생성자를 호출해야 만 함
        super();

        //멤버변수 선언
        this.text= "Hello";

        //화면의 갱신을 자동으로 해주는 데 영향을 주는 state멤버변수(객체 참조변수) 
        this.state= {
            text: "Hello nice",
            img: require('./images/moana01.jpg'),
        };
    }

    //이 컴포넌트 클래스가 화면에 보여줄 내용을 그려내는 함수[컴포넌트를 리턴하는]
    render(){
        //뷰(컴포넌트)를 리턴
        return (
            // <View style={ {padding:16, flex:1} }>
            //     {/* 1) 기본 버튼: 필수속성 title - 버튼의 글씨지정*/}                
            //     {/* 버튼 클릭이벤트 처리 onPress속성 : 버튼 클릭시 발동할 콜백함수 지정 */}
            //     {/* <Button title="button" onPress={ clickBtnFunction }></Button> */}

            //     {/* 익명함수를 변수에 대입하지 않고 곧바로 사용가능 */}
            //     {/* <Button title="button" onPress={ function(){ Alert.alert('click')} }></Button> */}
            //     {/* <Button title="button" onPress={ ()=>{ Alert.alert('click')} }></Button> */}

            //     {/* 2) 콜백함수는 멤버메소드로 만드는 것을 권장 */}
            //     {/* 멤버사용할때는 반드시  this. 키워드가 있어야함 */}
            //     <Button title="button" onPress={ this.clickBtn }></Button>
            // </View>

            // 3)버튼을 클릭시에 테스트 변경하기
            // 방법은 기존 방식과 완전히 다름..
            // 기존에는 버튼을 클릭하면 글씨를 가지고 있는 TextView를 참조해서
            // 그 글씨를 변경했었음.
            // <View style={ {padding:16, flex:1} }>
            //     <Button title="button" onPress={ this.changeTextByArrow }></Button>

            //     {/* Text컴포넌트가 보여줄 글씨를 고정된 글끼가 아니라 */}
            //     {/* 변수로 설정하기 - 우선 전역변수로 */}
            //     {/* <Text style={ textSytle }> { text } </Text> */}

            //     {/* 4)멤버변수로 테스트 값 지정해보기 */}
            //     <Text style={ textSytle}> { this.text  } </Text>
            // </View>

            <View style={ {flex:1, padding:16} }>
                <Button title="change text" onPress={ this.changeText }></Button>
                <Text style={ textSytle }>{ this.state.text }</Text>

                <View style={ {marginTop:16, width:150} }>
                    <Button title="change image" color="orange" onPress={ this.changeImage.bind(this) }></Button>
                </View>

                <Image source={ this.state.img } style={ imgStyle }></Image>
            </View>

        );

    }//render method...

    changeImage= function(){
        //bind()로 전달된 this객체가 이 함수 안에서의 this로 연결됨
        this.setState( {img: require('./images/moana02.jpg')}  );
    }


    changeText= ()=>{
        // this.state.text="nice to meet you.";
        // 자동갱신이 되려면 state의 값을 반드시 setState()메소드를 사용해야만 함
        this.setState( {text:"nice to meet youuuuuuuuuuuu"} );         
    }


    //3)실습에 사용할 메소드
    changeTextByClickBtn(){
        //Text컴포넌트가 보여주는 전역변수 값을 변경
        // text="Nice to meet you";
        // Alert.alert(text);

        //4)멤버변수 값 변경
        // 일반 함수 안에서의 this는 함수(객체) 자체를 의미함
        // 그래서 this.text는 에러임
        //this.text="Nice to meet you.";        

    }

    //함수를 만드는 다른 방법
    //4.2) 익명함수로 만드는 방법
    changeTextByAnounymous= function(){
        //익명함수도 this는 본인 객체를 의미함
        //그래서 아래의 this.text가 MainComponent의 text변수가 아니었음
        this.text="Good";//ERROR
    }

    //4.3) 두꺼운 화살표함수로 만드는 방법
    changeTextByArrow= ()=>{
        this.text="Nice to meet you.";
        Alert.alert(this.text);

        // 어찌되었든 화면갱신은 안됨
        // 화면을 갱신하라는 별도의 명령이 없어서....
        // 화면을 갱신하라는 메소드는 존재함 - 권장하지 않음
        this.forceUpdate(); // re-render()호출 함수
    }

    //RN에서는 화면을 갱신을 자동으로 이루어지는 것을 권장함
    //그래서 Component클래스안에 아주 특별한 멤버변수를 이미 만들어 놓았음
    //그 멤버의 이름은 state 라고 부름
    // 이 state의 값을 변경하면 자동으로 화면이 갱신되도록 시스템되어 있음
    // 즉, 이 컴포넌트 클래스가 상태값(state)을 저장하고 있고
    //이 state값을 화면에 보여준다는 개념을 형상화 하였음



    



    //2)실습에 사용할 메소드
    clickBtn(){
        Alert.alert('clicked button!!');
    }

}//MainComponent class...

//1)실습에 사용할 버튼 클릭콜백 함수
// function clickBtnFunction(){
//     //alert('clicked');//웹용 alert()
//     Alert.alert('clicked');
// }

//1.1)JS에서는 함수도 객체이므로 객체를 참조하듯히 함수를 변수에 넣을 수 있음
// 익명함수
// let clickBtnFunction= function(){
//     Alert.alert('pressed button');
// }

//1.2) 두꺼운 화살표 함수
let clickBtnFunction= ()=>{
    Alert.alert('pressed button');
}

//RN에서는 전역함수를 사용하는 것을 권장하지 않음
//객체지향이므로.. 객체의 버튼 이벤트는 그 객체안에 처리 메소드가 있는것이 좋음


//3)실습에서 사용할 전역변수
let text= "Hello";



//스타일 변수
const textSytle={
    marginTop:16,
    fontWeight:'bold',
    paddingLeft: 10,
    paddingRight:10,
};

const imgStyle={
    marginTop:8,
    flex:1,
    width:null,
    resizeMode:'cover',
}



//다른 문서에서 이 클래스를 알아듣도록(import 하도록) export
export default MainComponent;