import React from 'react';
import {
    View,
    Text,
    Animated
} from 'react-native';
import styles from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable'


const LeftActions = (progress, dragX) => {

    const scaleText = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0.5, 1],
        extrapolate: 'clamp'
    })

    return <View style={styles.leftActionStyle}>
        <Animated.Text style={{ transform: [{ scale: scaleText }] }}>Archive</Animated.Text>
    </View>
}

const RightActions = (progress, dragX) => {

    const scaleText = dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1, 0.5],
        extrapolate: 'clamp'
    })

    return <View style={styles.rightActionStyle}>
        <Animated.Text style={{ transform: [{ scale: scaleText }] }}>Delete</Animated.Text>
    </View>
}
 

const ListItem = (props) => {

    return (
        <Swipeable
            renderLeftActions={LeftActions}
            renderRightActions={RightActions} 
            // onSwipeableLeftOpen={props.onSwipeLeft} 
            // onSwipeableRightOpen={props.onSwipeRight}
            useNativeAnimations
            overshootRight={false}
            rightThreshold={.3}
            key={props.key}  
>
            <View style={styles.ContainerStyle}>
                <Text>{props.text}</Text>
            </View>
        </Swipeable>
    );
};

export default ListItem;
