import React, {useState} from 'react';
import {
    Text, 
    ImageBackground, 
    TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import REQUEST_COUPON_CODE from '../GraphQL/Queries/requestCoupon';
import {useQuery} from '@apollo/client';


const FoodItem = ({ route, navigation }) => {
    
    const { foodItemName, foodImageSrc, clientID } = route.params;
    const [clicked, setClicked] = useState(false);
    const {loading, error, data} = useQuery(REQUEST_COUPON_CODE, {
        variables:{
            foodItemName, 
            clientID
        }
    });
    if (data && data.getCouponByFoodItem.code){
        AsyncStorage.setItem('code', Number(data.getCouponByFoodItem.code));
    }
    
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
                        setClicked(true); 
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
        
        { clicked && 
            (
                <>
                    <Text> Here's your coupon code: {data.getCouponByFoodItem.code}</Text>
                    <Text> Expiry date: {data.getCouponByFoodItem.expiryDate} </Text>
                </>
            )
        }
        </>
    )

};



export default FoodItem; 

