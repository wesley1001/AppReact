import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';

let tabIcons = [];
let tabTitle = [];

class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this._setAnimationValue = this._setAnimationValue.bind(this);
    }


    static propTypes = {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
    };

    componentDidMount() {
        this._listener = this.props.scrollValue.addListener(this._setAnimationValue);
    }

    _setAnimationValue({ value, }) {
        tabIcons.forEach((icon, i) => {
            if ( i !== 2) {
                const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
                icon.setNativeProps({
                    style: {
                        color: this._iconColor(progress),
                    },
                });
                tabTitle[i].setNativeProps({
                    style: {
                        color: this._iconColor(progress),
                    },
                });
            }
        });
    }

    //color between rgb(252, 125, 48) and rgb(155,155,155)
    _iconColor(progress) {
        const red = 252 + (155 - 252) * progress;
        const green = 125 + (155 - 125) * progress;
        const blue = 48 + (155 - 48) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    }

    render() {
        return (<View style={[styles.tabs, this.props.style, ]}>
            {this.props.tabs.map((tab, i) => {
                return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                    <Icon
                        name={tab}
                        size={i===2 ? 44 : 26}
                        color={i===2 ? 'rgb(252, 125, 48)' : (this.props.activeTab === i ? 'rgb(252, 125, 48)' : 'rgb(155,155,155)')}
                        ref={(icon) => { tabIcons[i] = icon; }}
                        style={i===2? {marginTop : 18}: ''}
                        />
                    <Text
                        style={[styles.tabTitle, {color: (this.props.activeTab === i ? 'rgb(252, 125, 48)' : 'rgb(155,155,155)')}]}
                        ref={(title) => { tabTitle[i] = title; }}
                        >
                        {this.props.tabTile[i]}
                    </Text>
                </TouchableOpacity>;
            })}
        </View>);
    }
}

export default TabBar;