import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MultipleView from './MultipleView'
import ImageViewLocal from './ImageViewLocal'
import ScroolComponent from './ScroolComponent'
import ButtonCom from './ButtonCom'
import StatusBarComp from './StatusBarComp'
import AlertComp from './AlertComp'
import StyledComp from './StyledComp'

export default function Tutorial() {
  return (
    <View style={{ backgroundColor: 'plum', flex: 1, display: 'flex', justifyContent: 'center' }}>
      <ScrollView style={{ padding: 45 }}>
        {/* <MultipleView /> */}
        {/* <ImageViewLocal /> */}
        {/* <ScroolComponent /> */}
        {/* <ButtonCom /> */}
        {/* <StatusBarComp/> */}
        {/* <AlertComp/> */}
        <StyledComp />
      </ScrollView>
    </View>
  )
}