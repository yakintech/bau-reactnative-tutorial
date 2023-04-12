import { View, Text } from 'react-native'
import React from 'react'

const CityList = (props: CityListModel) => {
    return (
        <View style={{backgroundColor:props.color}}>
            {
                props.cities.map((item :any) => <Text>{item}</Text>)
            }
        </View>
    )
}

export default CityList

interface CityListModel{
    cities: string[]
    color:string
}

