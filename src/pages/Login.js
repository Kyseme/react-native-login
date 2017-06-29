/**
 * Created by Kyseme on 2017/6/16.
 */
import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,TextInput,Button,TouchableHighlight} from 'react-native';
import {NavigationActions}from 'react-navigation';
const resetActions = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Home'})]
});
export default class Login extends Component{

    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            userMsg:'',
            pwdMsg:''
        }
    }


    LoginIn() {
        // alert('123');
        //  let formData = new FormData();
        //  formData.append("username", "rain");
        //  formData.append("pwd", "123");

        let  username = this.state.username;
        let  pwd =this.state.password;
        if(username===''|| pwd===''){
            alert("用户名或者密码不能为空！")
        }else{
            fetch('http://192.168.56.1:8089/Login/LoginUser?username='+ username + '&pwd=' + pwd, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'json'
                    //'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
                .then((response) => response.json())
                .then((responseData) =>{
                    if(responseData.Success){
                        this.props.navigation.dispatch(resetActions);
                    }else if(responseData.Msg==='Error'){
                        alert("不存在此用户");
                    }else{
                        alert("用户名或者密码错误!");
                    }
                })

        }


    }

    render(){
        const {navigate}=this.props.navigation;
        return(
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.textStyle}>账号：</Text>
                    <TextInput style={styles.textInput} autoFocus={true} placeholder='请输入用户名' onChangeText={(username)=>this.setState({username})}
                               ref="username" value={this.state.username} underlineColorAndroid={'#e1e1e1'}/>
                </View>

                <View style={styles.item}>
                    <Text style={styles.textStyle}>密码：</Text>
                    <TextInput secureTextEntry={true} style={styles.textInput} autoFocus={true} placeholder='请输入密码'  onChangeText={(password)=>this.setState({password})}
                               ref="password" value={this.state.password} underlineColorAndroid={'#e1e1e1'}/>
                </View>
                <View  style={styles.btn}>
                    <Button onPress={this.LoginIn.bind(this)} title={'登录'}/>
                </View>
                <TouchableHighlight onPress={()=>navigate('Sign')}><Text>没有账号？请注册</Text></TouchableHighlight>
            </View>

        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center', /* 在flex容器的当前行的侧轴（纵轴）方向上的对齐方式 */
        margin:10
    },
    textStyle: {
        fontSize: 18,
        color: 'black',
        marginRight: 10
    },
    login: {
        height: 40,
        backgroundColor:'#22d9e3',
        justifyContent: 'center', /* 在flex容器的当前行的水平（横轴）方向上的对齐方式 */
        margin:20,
        width:200
    },
    loginText: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#FFF'
    },
    btn:{
        margin:20,
        height:40,
        width:200
    },
    textInput:{
        height:40,
        width:200
    }
})