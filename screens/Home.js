import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-web'
import HeaderTabs from '../components/HeaderTabs'

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>
        <View style={{backgroundColor:"white",padding:15}}>
            <HeaderTabs/>     
        </View>
        
    </SafeAreaView>
  )
}

export default Home