import React from 'react';
import {
    Text, 
    ImageBackground, 
    TouchableOpacity
} from 'react-native';

const FoodItem = ({ route, navigation }) => {
    
    const { foodItemName, foodImageSrc } = route.params;

    return (
        <>
            <Text 
                style={{
                    color: 'black', 
                    marginTop: 20, 
                    fontSize: 30, 
                    marginLeft: 10
                }}
            >
                {foodItemName}
            </Text>
            <ImageBackground 
                style={{
                    width: 400, 
                    height: 200, 
                    marginTop: 20, 
                    marginBottom: 20
                }}
                source={{uri: foodImageSrc}}
            />

            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 20,
                    marginBottom: 20,  
                    elevation: 2,
                    marginLeft: 12,
                    borderRadius: 20,
                    backgroundColor: "black", 
                    width: 130
                }}
                onPress={
                    () => {
                        console.log("salah")
                    }
                }
            >
                <Text
                    style={{
                        fontSize: 14, 
                        color: "white",
                    }}
                >
                    Request Coupon
                </Text>
            </TouchableOpacity>
        </>
    )

};



export default FoodItem; 

