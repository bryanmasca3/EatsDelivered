import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react'

const HeaderButton=({text,activeTab,setActivateTab})=>(
    <TouchableOpacity
    style={{backgroundColor:activeTab===text?'black':'white',
    paddingVertical:6,
    paddingHorizontal:16,
    borderRadius:30}}
    onPress={()=>{
        setActivateTab(text)
    }}
    ><Text
                        style={{color:activeTab===text?'white':'black',
                        fontSize:15,
                        fontWeight:"900"}}
                            >{text}</Text></TouchableOpacity>
)
 const HeaderTabs=() =>{
     const [activeTab,setActivateTab]=useState("Delivery")
  return (
    <View style={{flexDirection:"row",alignSelf:"center"}}>
      <HeaderButton 
        text="Delivery"  
        activeTab={activeTab}
        setActivateTab={setActivateTab}
        />
      <HeaderButton 
        text="PickUp"      
         activeTab={activeTab}       
         setActivateTab={setActivateTab}
        />
    </View>
  )
}
export default HeaderTabs