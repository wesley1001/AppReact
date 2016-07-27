/**
 * Created by lyan2 on 16/7/26.
 */
import React from 'react-native'

var {
    StyleSheet
} = React;

export default styles = StyleSheet.create({
    text:{
        color: '#4a4a4a'
    },
    userContainer: {
        flexDirection:'column',
        alignItems: 'center',
        marginTop: 10,
    },
    portrait: {
        borderRadius: 45,
        borderColor: '#fff',
        borderWidth: 2
    },
    user: {
        flexDirection:'row',
        justifyContent: 'center',
        marginTop:5
    },
    income: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'flex-end',
        marginTop:5
    },
    summaryContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'stretch',
        backgroundColor:'#fff',
        marginTop: 10,
        marginBottom: 5,
        paddingVertical:5
    },
    asset: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    assetText: {
        fontSize:12
    },
    separator: {
        borderLeftWidth:1,
        borderLeftColor:'#ccc'
    },
    count: {
        fontSize:20,
        color:'#FC4D30',
        fontStyle: 'italic'
    },
    myNotesTitle: {
        backgroundColor: '#fff',
        padding: 16
    },
    myNote:{
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#fff',
        padding: 20
    },
    noteUserBox: {
        flexDirection: 'row'
    },
    noteUserMsgBox: {
        marginLeft: 5,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    noteUserTitle: {
        fontSize: 16
    },
    noteCreateTime: {
        fontSize: 12,
        color: '#9B9B9B'
    },
    noteThumbBox: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'stretch',
        height: 191
    },
    noteThumb: {
        
    },
    noteTitle: {
        fontSize: 14,
        marginVertical: 10
    },
    noteAssets: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    noteAsset: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    noteAssetIcon: {
        color:'#FC4D30'  
    },
    container: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        padding: 30,
        marginTop: 21,
        alignItems: 'stretch',
    },
    navigator: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    button: {
        paddingVertical:9,
        backgroundColor: '#DFDFDF',
        borderRadius:2,
        fontSize:18,
        color:'#fff',
        fontFamily:'STHeitiSC-Medium',
        alignItems:'center',
        justifyContent:"center"
    },
    activeButton: {
        backgroundColor: '#F37D30',
    }
});