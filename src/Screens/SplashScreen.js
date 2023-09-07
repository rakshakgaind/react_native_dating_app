import { View, Image, Text } from 'react-native'
import React from 'react'
import Images from '../ImagesGenertor/ImagesGenerator'

const SplashScreen = () => {
    return (
        <View style={{flex:1,alignItems:"center",justifyContent:'center',backgroundColor:'#ffff'}}> 
            <Image source={Images.logo} />
        </View>
    )
}

export default SplashScreen