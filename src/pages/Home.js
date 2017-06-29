/**
 * Created by Kyseme on 2017/6/4.
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text, Button,View, Navigator,Image } from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import MineScreen from './../pages/MinnPage';
import MyInfoScreen from './../pages/MyInfo';
// class Home extends Component{
//     static navigationOptions = {
//         headerTitle: '主页',
//     }
//     constructor(props){
//         super(props);
//     }
//     render(){
//         const {navigate}=this.props.navigation;
//         return(
//             <View style={styles.container}>
//                 <Text style={styles.textStyle}>欢迎来到主页</Text>
//             </View>
//         );
//
//     }
// }

const MyApp = TabNavigator({
    MyHome: {
        screen: MineScreen,
    },
    MyInfo: {
        screen: MyInfoScreen,
    },
}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#008AC9', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 12, // 文字大小
        },
    },
});
export default MyApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 18,
        color:'black',
        marginRight: 10
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});