import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

//STATE
const StateIntro = () => {
    
    //number -> variable
    //setNumber -> variable SET FUNCTION
    //0 -> default value
    const [number, setnumber] = useState(0)

    const increase = () => {
       setnumber(number + 1)
    }

    return (
        <View>
            <Text style={{fontSize:40}}>{number}</Text>
            <Button title='Increase' onPress={increase}></Button>
        </View>
    )
}

export default StateIntro