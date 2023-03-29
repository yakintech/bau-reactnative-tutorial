import { View, Text, FlatList, Button } from 'react-native'
import React, { useState } from 'react'

const StateArraySortSample = () => {

    const [names, setNames] = useState(['Cağatay', 'Ali', 'Ayça', 'Sema', 'Hazal', 'Barbaros', 'Ertan', 'Müge']);

    const [sortStatus, setsortStatus] = useState(false);

    const renderItem = ({ item }: any) => {
        return <Text style={{ fontSize: 40 }}>{item}</Text>
    }

    const sort = () => {
        //ASC-DESC
        if (sortStatus == false) {
            names.sort();
        }
        else {
            names.reverse();
        }

        setNames([...names]);
        setsortStatus(!sortStatus)

    }
    return (
        <View>
            <Button onPress={sort} title='Sort'></Button>
            <FlatList
                data={names}
                renderItem={renderItem}
            />
        </View>
    )
}

export default StateArraySortSample