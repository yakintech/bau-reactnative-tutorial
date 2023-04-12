import { SafeAreaView } from 'react-native'
import React from 'react'
import Box from './src/lessons/propsSample/Box'
import Product from './src/lessons/propsSample/Product'
import CityList from './src/lessons/propsSample/CityList'

const App = () => {

  let cities = ['İzmir', 'Ankara', 'İstanbul', 'Edirne', 'Erzurum', 'Diyarbakır', 'Trabzon'];


  const hello = () => {
    console.log('HELLO PROPS!!');
  }

  return (
    <SafeAreaView>
      <Box hello={hello} name='IPhone' unitPrice={1000} description='lorem ipsum...' color='tomato'></Box>
      <Box name='Samsung' unitPrice={2500} description='lorem....' color='aqua'></Box>

      <Product name='Huawei' unitPrice={1000}></Product>

      <CityList color='blue' cities={cities} />
    </SafeAreaView>
  )
}

export default App