/**
 * Created by Kyseme on 2017/5/29.
 */
import React,{Component}from 'react';
import PropTypes from 'prop-types';
import {hashHistory} from 'react-router';
export default function request(method,url,body) {
   if(method==='GET'){
       // fetch的GET不允许有body，参数只能放在url中
       body=undefined;
   }else{
       body=body&&JSON.stringify(body);
   }
   return fetch(url,{
       method,headers:{
           'Content-Type': 'application/json',
           'Accept': 'application/json',
       },
       body
   })
       .then((res)=>{
       if(res.status===401){
           hashHistory.push('/login');
           return Promise.reject('Unauthorized.');
       }else {
           const token=res.headers.get('access-token');
           if(token){
               sessionStorage.setItem('access_token',token);
           }
           return res.json();
       }
       });
}

request.contextTypes={
    router: PropTypes.object.isRequired

};

export const get = url => request('GET', url);
export const post = (url, body) => request('POST', url, body);
export const del = (url, body) => request('DELETE', url, body);
export const put = (url, body) => request('PUT', url, body);