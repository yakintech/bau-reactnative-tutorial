import { View, Text } from 'react-native'
import React from 'react'

const Product = (props:ProductModel) => {
  return (<>
    <View>
        <Text style={{fontSize:35}}>{props.name}</Text>
        <Text style={{fontSize:35}}>{props.unitPrice}</Text>

    </View>
  </>
  )
}

export default Product


interface ProductModel{
    name:string
    unitPrice:number
}