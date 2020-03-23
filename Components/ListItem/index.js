import React from 'react';
import {
    View,
    Text,
    Animated
} from 'react-native';
import styles from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { TouchableOpacity } from 'react-native-gesture-handler';


const LeftActions = (progress, dragX) => {

    const scaleText = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0.5, 1],
        extrapolate: 'clamp'
    })

    return <View style={styles.leftActionStyle}>
        <Animated.Text style={{ transform: [{ scale: scaleText }], color: '#fff' }}>Swipe Right To Archive</Animated.Text>
    </View>
}

const RightActions = (progress, dragX, props) => {

    const scaleText = dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1.4, 0.4],
        extrapolate: 'clamp'
    })

    return  <TouchableOpacity onPress={props.onSwipeRight}>
            <Animated.View style={[styles.rightActionStyle,{ transform: [{ scale: scaleText }] }]}>
            <Text style={{color: '#fff'}}>Delete</Text>
            </Animated.View>
        </TouchableOpacity>

}


const ListItem = (props) => {

    return (
        <Swipeable
            renderLeftActions={LeftActions}
            renderRightActions={( progress, dragX ) => RightActions(progress, dragX, props)}
            onSwipeableLeftOpen={props.onSwipeLeft}  
            useNativeAnimations
            overshootRight={false}
            key={props.key}
        >
            <View style={styles.ContainerStyle}>
                <Text>{props.text}</Text>
            </View>
        </Swipeable>
    );
};

export default ListItem;
