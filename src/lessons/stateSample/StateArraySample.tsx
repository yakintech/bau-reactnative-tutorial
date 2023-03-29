import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const StateArraySample = () => {

    const [metalBands, setmetalBands] = useState(['Iron Maiden', 'Slipknot', 'Gojira', 'Parkway Drive', 'Pentagram']);

    const clear = () => {
        setmetalBands([]);
    }

  return (
    <View>
        <Text style={{fontSize:50}}>{metalBands.length}</Text>
        {
            metalBands && metalBands.map((item) => <Text style={{fontSize:40}}>{item}</Text>)
        }
        <Button title='Clear' onPress={clear}></Button>
    </View>
  )
}

export default StateArraySample