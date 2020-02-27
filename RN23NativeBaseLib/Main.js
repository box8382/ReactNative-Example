import React, {Component} from 'react';
import {Container, Header, Content, Footer,Left, Button, Icon, Body, Title, Right, FooterTab, Text, Card, CardItem, Thumbnail} from 'native-base';
import { Alert } from 'react-native';

export default class Main extends Component{
    render(){
        return (
            // Container : 자동 flex:1 스타일이 적용된 View
            <Container>
                {/* 크게 3개영역으로 화면 구성 */}
                <Header>
                    <Left>
                        <Button>
                            <Icon name="menu"></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Native Base</Title>
                    </Body>
                    <Right>                        
                    </Right>
                </Header>

                <Content style={{padding:16}}>
                    <Button warning><Text>버튼</Text></Button>
                    <Button info bordered><Text>버튼</Text></Button>
                    <Button dark rounded><Text>버튼</Text></Button>
                    <Button block danger><Text>버튼</Text></Button>
                    <Button>
                        <Icon name="home"></Icon>
                        <Text>home</Text>
                    </Button>

                    <Card>
                        <CardItem>
                            <Thumbnail source={{uri:"https://www.w3schools.com/w3css/img_lights.jpg"}}></Thumbnail>
                           <Text>native base</Text> 
                        </CardItem>
                        <CardItem button onPress={()=>Alert.alert('hello')}>
                           <Body>
                               <Text>click on any carditem</Text>
                           </Body>
                        </CardItem>
                    </Card>
                </Content>

                <Footer>
                    {/* Bottom 탭 */}
                    <FooterTab>
                        <Button>
                            <Text>TAB1</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button>
                            <Text>TAB2</Text>
                        </Button>
                    </FooterTab>

                </Footer>
                
            </Container>
        );
    }
}