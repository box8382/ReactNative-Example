import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';

class MainComponent2 extends Component{

    render(){
        return(
            <View style={{marginTop:16, backgroundColor:'blue'}}>
                <Text style={{margin:5}}>{this.props.name}</Text>
                <Button onPress={this.props.onPress} title={this.props.title} color={this.props.color}></Button>
            </View>
        );
    }

    clickBtn=()=>{
        alert('clicked!!');
    }
}


//다른 문서에서 이 컴포넌트를 알수 있도록 export
export default MainComponent2;
