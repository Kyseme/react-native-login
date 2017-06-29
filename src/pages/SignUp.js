/**
 * Created by Kyseme on 2017/6/17.
 */
import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,TextInput,Button,TouchableHighlight} from 'react-native';
export default class SignUp extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            cpassword:''
        }
    }
    static navigationOptions = {
        headerTitle: '注册',
    }

    SignUp(){
        let  username = this.state.username;
        let  pwd =this.state.password;
        let  cpwd=this.state.cpassword;
        if(username==''|| pwd==''||cpwd==''){
            alert("用户名或者密码不能为空！！");
        }
       else if (pwd ===cpwd){
            fetch('http://192.168.56.1:8089/Login/AddUser?username='+ username + '&pwd=' + pwd, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'json'
                },
            })
                .then((response) => response.json())
                .then((responseData) =>{
                  if(responseData.Success){
                        alert("注册成功");
                        this.props.navigation.navigate('Login');
                    }else{
                      this.refs.username.clear();
                      this.refs.password.clear();
                      this.refs.cpassword.clear();
                      alert("已经有此用户，请重新注册");

                    }
                })
        }
        else{
            alert("两次输入密码不一致！！！")
            this.refs.password.clear();
            this.refs.cpassword.clear();
        }

    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.textStyle}>用户账号：</Text>
                    <TextInput style={{height:40,width:200}} autoFocus={true} placeholder='请输入用户名' onChangeText={(username)=>this.setState({username})}
                       ref="username"    value={this.state.username} underlineColorAndroid={'#e1e1e1'}/>
                </View>

                <View style={styles.item}>
                    <Text style={styles.textStyle}>创建密码：</Text>
                    <TextInput secureTextEntry={true} style={{height:40,width:200}} autoFocus={true} placeholder='请输入密码'  onChangeText={(password)=>this.setState({password})}
                           ref="password"   value={this.state.password} underlineColorAndroid={'#e1e1e1'}/>
                </View>
                <View style={styles.item}>
                    <Text style={styles.textStyle}>确认密码：</Text>
                    <TextInput secureTextEntry={true} style={{height:40,width:200}} autoFocus={true} placeholder='确认密码'  onChangeText={(cpassword)=>this.setState({cpassword})}
                           ref="cpassword"   value={this.state.cpassword} underlineColorAndroid={'#e1e1e1'}/>
                </View>
                <View  style={styles.btn}>
                    <Button onPress={this.SignUp.bind(this)} title={'注册'}/>
                </View>

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
    }



})