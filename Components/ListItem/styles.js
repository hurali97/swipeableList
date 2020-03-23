import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    ContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        borderWidth: 0.5,
        marginVertical: 3,
        backgroundColor: '#fff'
    },
    leftActionStyle: {
        flex: 1,
        backgroundColor: '#383',
        justifyContent: 'center',
        padding: 15,
        marginVertical: 3,
        alignItems: 'flex-start'
    },
    rightActionStyle:{
        // flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        padding: 15,
        marginVertical: 3,
        alignItems: 'flex-end'
    }
})

export default styles;