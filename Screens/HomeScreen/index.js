import React from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';
import ListItem from '../../Components/ListItem';
import styles from './styles';


class HomeScreen extends React.Component {

    state = {
        listData: [
            {
                data: "Wow, this is great news",
                id: 1
            },
            {
                data: "Yayyy! My lad",
                id: 2
            },
            {
                data: "It is awesome, patrice",
                id: 3
            }
        ]
    }

    _renderListItem = (listItem) => {

        return <ListItem text={listItem.item.data} onSwipeLeft={() => this._onSwipeLeft(listItem.index)} key={listItem.item.id}
            onSwipeRight={() => this._onSwipeRight(listItem.index)} />
    }

    _onSwipeLeft = (index) => {
        this.state.listData.splice(index, 1)

        this.setState({ listData: [...this.state.listData] })
    }

    _onSwipeRight = (index) => {
        this.state.listData.splice(index, 1)

        this.setState({ listData: [...this.state.listData] })
    }

    _renderListHeader = () => {
        return <View style={styles.listHeader}>
            <Text style={styles.Heading}>Swipeable List Demo</Text>
            <Text style={styles.text}>Swipe from left to perform archive action</Text>
            <Text style={styles.text}>Swipe from right to press delete button</Text>
        </View>
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.listData}
                    renderItem={this._renderListItem}
                    keyExtractor={(item, ind) => ind}
                    ListHeaderComponent={this._renderListHeader} 
                    contentContainerStyle={{ width: '80%', alignSelf: 'center' }}
                />
            </View>
        );
    }
};

export default HomeScreen;
