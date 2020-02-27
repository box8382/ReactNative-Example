import React, {Component} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

export default class SubCatalogList extends Component{

    constructor(){
        super();
        this.state={
            data: [],
        }
    }

    render(){
        return (
            <View style={style.container}>
                {/* 서버타이틀 제목 */}
                <View style={style.titleContainer}>
                    <Text style={style.title}>{this.props.title}</Text>
                </View>

                <FlatList
                    horizontal={true}
                    data={this.state.data}
                    renderItem={ ( obj )=>{
                        return (
                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={style.item}
                                onPress={ ()=>this.props.onPress(obj.item.id, obj.item.title) }>
                                <Image
                                    source={ {uri: obj.item.large_cover_image} }
                                    style={ {width:210, height:270}}></Image>
                                <Text style={style.subtitle}>{obj.item.title}</Text>
                                {
                                    this.props.title==="최신등록순" && <Text style={{textAlign:"center"}}>{obj.item.date_uploaded}</Text>
                                }
                                {
                                    this.props.title==="평점순" && <Text style={{textAlign:"center"}}>{obj.item.rating} ★</Text>
                                }
                                {
                                    this.props.title==="다운로드순" && <Text></Text>
                                }
                                {/* date_uploaded */}
                            </TouchableOpacity>
                        );
                    } }
                    keyExtractor={ (item, index)=>{ return "Sub"+index} }>
                </FlatList>
            </View>
        );
    }

    loadData= ()=>{
        fetch(this.props.url)
        .then( response => response.json() )
        .then( responseJson=> this.setState({data:responseJson.data.movies}) );
    }

    componentDidMount(){
        if(this.props.url) this.loadData();
    }
}

const style=StyleSheet.create({
    container:{
        marginTop:12, 
        marginBottom:4,
    },
    titleContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'flex-start',
    },
    title:{
        fontSize:16, 
        fontWeight:'bold', 
        borderRadius:5, 
        backgroundColor:'#F15F5F', 
        color:'white', 
        padding:8, 
        
    },
    item:{paddingLeft:4, paddingRight:4,},
    subtitle:{
        marginTop:8,
        maxWidth:200,
        textAlign:'center',
    }
});