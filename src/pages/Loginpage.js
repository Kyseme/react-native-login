/**
 * Created by Kyseme on 2017/6/4.
 */
import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,TextInput,Button} from 'react-native';
import {NavigationActions}from 'react-navigation';
import NetUitl from './../utils/NetUtil';
const resetActions = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Main'})]
});

export default class Login extends Component{

    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    //this.props.navigation.dispatch(resetActions);
    LoginIn() {
       // alert('123');
       //  let formData = new FormData();
       //  formData.append("username", "rain");
       //  formData.append("pwd", "123");

        let  username = this.state.username;
        let  pwd =this.state.password;

        //fetch('http://192.168.191.1:8089/Login/LoginUser?username='+ username + '&pwd=' + pwd, {
        fetch('http://192.168.191.1:8089/Login/LoginUser?username='+ username + '&pwd=' + pwd, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'json'
                //'Content-Type': 'application/x-www-form-urlencoded',
            },
           // body: JSON.stringify({
               // 'username': "rain",
               // 'pwd': "123",
                //'username=rain&pwd=123',
                //}),
                //body: formData,
            //})
        })
            //
            .then((response) => response.json())
            .then((responseData) =>{

              if(responseData.Success){

                  alert("234");
                  //alert(responseData.Msg);
              }
              else{
                  //alert(responseData.Success);
                  alert("eee");
                  //alert(responseData.Msg);
              }
            })


    }
    getTest(){
        // alert('123');
        //  let formData = new FormData();
        //  formData.append("username", "rain");
        //  formData.append("pwd", "123");

        let  username = this.state.username;
        let  pwd =this.state.password;

        //fetch('http://192.168.191.1:8089/Login/LoginUser?username='+ username + '&pwd=' + pwd, {
        fetch('http://192.168.191.1:8089/Login/LoginUser?username='+ username + '&pwd=' + pwd, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'json'
                //'Content-Type': 'application/x-www-form-urlencoded',
            },
            // body: JSON.stringify({
            // 'username': "rain",
            // 'pwd': "123",
            //'username=rain&pwd=123',
            //}),
            //body: formData,
            //})
        })
        //
            .then((response) => response.json())
            .then((responseData) =>{

                if(responseData.Success){

                    alert("234");
                    //alert(responseData.Msg);
                }
                else{
                    //alert(responseData.Success);
                    alert("eee");
                    //alert(responseData.Msg);
                }
            })
        //     .then((responseData) => {
        //         if (responseData.Success) {
        //             alert("234");
        //             //alert(responseData.Msg);
        //         }
        //         else {
        //             alert(responseData.Msg);
        //             //alert("eee");
        //             //alert(responseData.Msg);
        //         }
        //     })

    }

    getBai(){
        NetUitl.get('http://www.qq.com/','',function (set) {
            alert(set);
        })
    }
    getData() {
        const { navigate } = this.props.navigation;
        //alert("we");
        //return fetch('http://192.168.191.1:59829/Login/UserLogin')
        //alert(fetch('http://192.168.191.1:8087/Login/UserLogin'));
       return fetch('http://192.168.191.1:8080/db.json')


            .then((response) => response.json())
            .then((responseJson) => {
                    alert(responseJson.name);
            })
            .catch((error) => {
                console.error(error);
            });

        // var MOCKED_MOVIES_DATA =
        //     {"title": '标题', "year": '2015'};
        // alert(MOCKED_MOVIES_DATA.title);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.textStyle}>账号：</Text>
                   <TextInput style={{height:40,width:200}} autoFocus={true} placeholder='请输入用户名' onChangeText={(username)=>this.setState({username})}
                   ref="inputLoginName" value={this.state.username} underlineColorAndroid={'#e1e1e1'}/>
                </View>

                <View style={styles.item}>
                    <Text style={styles.textStyle}>密码：</Text>
                    <TextInput secureTextEntry={true} style={{height:40,width:200}} autoFocus={true} placeholder='请输入密码'  onChangeText={(password)=>this.setState({password})}
                               ref="inputLoginPwd" value={this.state.password} underlineColorAndroid={'#e1e1e1'}/>
                </View>
                <View  style={styles.btn}>
                <Button onPress={this.LoginIn.bind(this)} title={'登录'}/>
                </View>
                <View  style={styles.btn}>
                    <Button onPress={this.getData.bind(this)} title={'获取'}/>
                </View>
                <View  style={styles.btn}>
                    <Button onPress={this.getBai.bind(this)} title={'百度'}/>
                </View>
                <View  style={styles.btn}>
                    <Button onPress={this.getTest.bind(this)} title={'测试'}/>
                </View>
            </View>
        );
    }
    // renderUser(user){
    //     return(
    //         <View>
    //             <Text>{user}</Text>
    //         </View>
    //     );
    // }


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