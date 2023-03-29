import { View, Text, FlatList, Button } from 'react-native'
import React, { useState } from 'react'
import { suppliers } from '../../../data/suppliers';

const StateObjectArraySample = () => {

  const [suppliersList, setSuppliersList] = useState(suppliers);

  const renderSupplier = ({ item }: any) => {
    return <Text style={{fontSize:35}}>{item.companyName}</Text>
  }

  const load = () => {
    setSuppliersList(suppliers)
  }
  return (
    <View>
      <Button title='CLEAR' onPress={() => setSuppliersList([])}></Button>
      <Button title='LOAD' onPress={load}></Button>

      <FlatList
        data={suppliersList}
        renderItem={renderSupplier}
      />
    </View>
  )
}

export default StateObjectArraySample