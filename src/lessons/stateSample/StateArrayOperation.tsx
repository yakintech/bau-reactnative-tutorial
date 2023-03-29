import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const StateArrayOperation = () => {

    const [cities, setcities] = useState(['İstanbul', 'İzmir', 'Ankara', 'Trabzon', 'Diyarbakır', 'Tekirdağ', 'Ağrı']);


    const removeItem = (key: any) => {

        cities.splice(key, 1);
        setcities([...cities])
        
    }

    return (
        <View>
            <Button onPress={() => setcities([])} title='Clear'></Button>
            <Text style={{fontSize:50}}>Length: {cities.length}</Text>
            {
                cities && cities.map((item, key) =>
                    <Text key={key} onPress={() => removeItem(key)} style={{ fontSize: 40 }}>
                        {item}
                    </Text>)
            }
        </View>
    )
}

export default StateArrayOperation