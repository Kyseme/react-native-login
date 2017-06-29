/**
 * Created by Kyseme on 2017/6/16.
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text, Button,View, Navigator,Image ,ListView} from 'react-native';
export default class MinnPage extends Component{
    constructor(props){
        super(props);
        this.state={
            data:null,
        }
    }
    static navigationOptions = {
        header:null,
        tabBarLabel: '主页',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./../images/home.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    componentDidMount(){
        fetch('http://www.imooc.com/api/teacher?type=4&num=30')
            .then((response) => response.json())
            .then((jsonData) => {        //jsonData就是上一步的response.json()
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                   data: ds.cloneWithRows(jsonData.data),     //data是一个对象数组
                    //datas:jsonData.data,
                });
                //alert(this.state.datas[0].name);
            })
            .catch((error) => {          //注意尾部添加异常回调
                alert(error);
            });
    }

//上一个.then的回调函数返回的数据，由下一个.then的回调函数接收
    renderRow(rowData){//参数为接收的每一行的数据，理解：数组data的子项
        return(
            <View style={styles.listrow}>
                <Image style={styles.img}
                       source={{uri:rowData.picSmall}}/>
                <View  style = { styles.textView }>
                    <Text style = {styles.textTitle} numberOfLines={1}>
                        { rowData.name }
                    </Text>
                </View>
            </View>

        );
    }

    render(){
        if(!this.state.data){//如果this.state.data没有数据(即网络请求未完成),则返回一个加载中的文本
            return(
                <View>
                    <Text>loading.....</Text>
                </View>

            );
        }else{//当this.state.data有了数据，则渲染ListView
            return(
                <ListView
                    dataSource={this.state.data}
                    renderRow={(rowData)=>this.renderRow(rowData)}>
                </ListView>
            );
        }


    }




}
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
    },
    listrow:{
        flex:1,
        flexDirection:'row',
        padding:10
    },
    textView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:5
    },
    textTitle:{
        flex:1,
        textAlign:'center',
        color:'#010908'
    },
    textContent:{
      flex:1,
        fontSize:11,
        color:'#000',
        textAlign:'center'
    },
    img:{
       height:55,
        width:100
    }
});