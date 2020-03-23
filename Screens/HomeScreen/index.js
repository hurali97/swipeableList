import React from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';
import ListItem from '../../Components/ListItem';


class HomeScreen extends React.Component {

    state = {
        listData: [
            {
                data:"Wow, this is great news",
                id: 1
            },
            {
                data:"Yayyy! My lad",
                id: 2
            },
            {
                data:"It is awesome, patric",
                id: 3
            } 
        ]
    }

    _renderListItem = (listItem) => {  
        
        return <ListItem text={listItem.item.data} onSwipeLeft={this._onSwipeLeft}  key={listItem.item.id}
        onSwipeRight={()=>this._onSwipeRight(listItem.index)} />
    }

    _onSwipeLeft = () => {
        alert('left')
    }

    _onSwipeRight = (index) => { 
        this.state.listData.splice(index,1)
      
        this.setState({listData: [...this.state.listData] }) 
    }

    render() {
        return (
            <View> 
                <FlatList
                    data={this.state.listData}
                    renderItem={this._renderListItem}
                    keyExtractor={(item,ind)=> ind}
                />
            </View>
        );
    }
};

export default HomeScreen;
