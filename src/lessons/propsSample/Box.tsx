import { View, Text, Button } from 'react-native'
import React from 'react'

const Box = (props:any) => {

  return (
    <View style={{backgroundColor:props.color}}>
      <Text>{props.name}</Text>
      <Text>{props.description}</Text>
      <Text>{props.unitPrice}</Text>
      <Button title='PRESS ME!' onPress={props.hello}></Button>
    </View>
  )
}

export default Box