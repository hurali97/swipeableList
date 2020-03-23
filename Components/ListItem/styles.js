import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    ContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        borderWidth: 0.5,
        marginVertical: 3,
        backgroundColor: '#fff',
        elevation: 6,
    },
    leftActionStyle: {
        flex: 1,// For full swipe behaviour 
        backgroundColor: '#383',
        justifyContent: 'center',
        padding: 15,
        marginVertical: 3,
        alignItems: 'flex-start',
    },
    rightActionStyle:{ 
        backgroundColor: '#DC143C',
        justifyContent: 'center',
        padding: 15,
        marginVertical: 3,
        alignItems: 'flex-end',
       
    }
})

export default styles;