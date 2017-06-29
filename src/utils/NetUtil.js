/**
 * Created by Kyseme on 2017/6/9.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    Platform,
    AsyncStorage
} from 'react-native';
export default class NetUtil extends Component{
    /*NetUtil网路请求的实现
     *  get请求
     *  url:请求地址
     *  data:参数
     *  callback:回调函数
     * */
    static get(url,params,callback){
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        //fetch请求
        fetch(url,{
            method: 'GET',
        })
            .then((response) => {
                callback(response)
            }).done();
    }
    /*
     *  post请求
     *  url:请求地址
     *  data:参数
     *  callback:回调函数
     * */
    static post(url,params,headers,callback){
        //fetch请求
        fetch(url,{
            method: 'POST',
            headers:{
                'token': headers
            },
            body:JSON.stringify(params)
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                callback(responseJSON)
            }) .done();
    }



}

// let NetUtil = {
//     postJson(url, data, callback){
//         var fetchOptions = {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//               //  'Content-Type': 'multipart/form-data'
//                 'Content-Type': 'text/plain'
//               //  'Content-Type': 'application/x-www-form-urlencoded'
//             },
//           //  body:data
//                body:JSON.stringify(data)
//         };
//
//         fetch(url, fetchOptions)
//             .then((response) => response.json())
//             .then((responseJson) => {
//                //  callback(JSON.parse(responseText));
//                 callback(responseJson);
//                 alert(responseJson);
//             }).done();
//     },
// }
// export default NetUtil;