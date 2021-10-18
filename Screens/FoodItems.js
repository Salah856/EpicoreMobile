import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, View, FlatList,
    TouchableOpacity, ImageBackground, 
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import foodItems from '../db';
import REDEEM_COUPON_SUBSCRIPTION from '../GraphQL/Subscriptions/redeemCouponSubscription';
import {useSubscription} from '@apollo/client'; 
import generateClientID from '../utils/generateClientID';
import createNotificationAlert from '../utils/createNotificationsAlert';

const FoodItems = ({ navigation })=>{

    const clientID = generateClientID();
    const {data, loading, error} = useSubscription(
            REDEEM_COUPON_SUBSCRIPTION,
            {
                variables: {         
                    code: AsyncStorage.getItem('code')
                }
            }
        )
    
    if (data && data.redeemedCoupon){
        const {text, redeemed} = data.redeemedCoupon;
        if(redeemed && clientID == data.redeemedCoupon.clientID){
            createNotificationAlert(text);
        } 
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={foodItems}
                renderItem={
                    ({ item, index }) => (
                        <TouchableOpacity
                            key={index}
                            onPress={(el) => { 
                                navigation.navigate('FoodItem', {
                                    foodItemName: item.foodItemName,
                                    foodImageSrc: item.foodImageSrc,
                                    clientID, 
                                }) 
                              }
                            }
                        > 
                            <ImageBackground 
                                style={styles.imageBackground}
                                source={{uri: item.foodImageSrc}}
                            >
                            </ImageBackground> 
                        </TouchableOpacity>
                    )
                }
            >
            </FlatList>
        <StatusBar style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageBackground:{
      flex: 1,
      height: 100,
      width: 300,
      backgroundColor: "black",
      margin: 7.5,
      justifyContent: "center",
      alignItems: "center"
    }, 
    flatList:{
      marginTop: 150,
    }
});

export default FoodItems; 

