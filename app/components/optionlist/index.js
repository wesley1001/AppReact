/**
 * Created by lyan2 on 16/8/7.
 */
import React from 'react';
import {
    Animated,
    Dimensions,
    ListView,
    RecyclerViewBackedScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { connect } from 'react-redux';
import Icon from '../../../node_modules/react-native-vector-icons/FontAwesome';

class OptionList extends React.Component {
    constructor(props) {
        super(props);

        /* we used the defaultGetRowData, this requires dataBlob has below structure:
         * dataBlob = {section:{rowID_1: rowData1, rowID_2: rowData2,...},...};
         *
         * Todo
         * We need to make sure rowID is noteID
         */
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 != s2
        });

        this.state = {
            dataSource: ds
        }
    }

    componentDidMount() {
        let source = {options:
        {"option1":{
            title: '新的笔记'
        },"option2":{
            title: '新的交易'
        },"option3":{
            title: '新的粉丝'
        },"option4":{
            title: '新的评论'
        }}}
        this.setState({dataSource:this.state.dataSource.cloneWithRowsAndSections(source)});
    }

    componentWillMount() {
    }

    _updateFromServer(text) {
        // fetch('https://mywebsite.com/endpoint/', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         firstParam: 'yourValue',
        //         secondParam: 'yourOtherValue',
        //     })
        // }).then((response) => response.json())
        //     .then((responseJson) => {
        //         return responseJson.movies;
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        let source = {options:
        {"option1":{
            title: '美元'
        },"option2":{
            title: '人民币'
        },"option3":{
            title: '澳元'
        },"option4":{
            title: '英镑'
        }}};

        this.setState({dataSource:this.state.dataSource.cloneWithRowsAndSections(source)});
    }

    _onPressOption(messageData) {
    }

    _renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.optionsHeader}>
                <View style={styles.richTextInput}>
                    {searchIcon}
                    <TextInput returnKeyType='search' returnKeyLabel='search' autoFocus={true} style={styles.textInput} onEndEditing={(text) => this._updateFromServer(text)}/>
                </View>
                <TouchableHighlight>
                    <Text style={[styles.text, styles.cancelText]}>取消</Text>
                </TouchableHighlight>
            </View>
        );
    }

    _renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <TouchableHighlight onPress={() => {highlightRow(sectionID, rowID); this._onPressOption(rowData);}}>
                <View style={styles.optionRow}>
                    <Text style={[styles.text]}>{rowData.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (
            <View key={sectionID + '_' + rowID}
                  style={styles.separatorHorizontal} />
        );
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                  renderSectionHeader={this._renderSectionHeader.bind(this)}
                  renderRow={this._renderRow.bind(this)}
                  renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                  renderSeparator={this._renderSeparator}/>
        )
    }

}

const styles = StyleSheet.create({
    text: {
        color: '#4a4a4a'
    },
    textInput: {
        marginHorizontal: 10,
        padding: 3,
        height: 26,
        flex:1,
        fontSize:20,
        color:'#4a4a4a'
    },
    richTextInput: {
        backgroundColor: '#bababa',
        borderColor: '#eee',
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    separatorHorizontal: {
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    optionsHeader: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        alignItems: 'center'
    },
    cancelText: {
        marginLeft: 10
    },
    linkIcon: {
        color:'#9b9b9b'
    },
    optionRow: {
        marginHorizontal: 10,
        backgroundColor: '#f1f1f1',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

var chevronRightIcon = <Icon style={[styles.linkIcon]} size={16} name="angle-right"/>;
var searchIcon = <Icon style={[styles.linkIcon]} size={16} name="search"/>;

export default OptionList;